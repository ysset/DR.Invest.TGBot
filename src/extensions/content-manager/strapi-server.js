const { setCreatorFields, pipeAsync } = require('@strapi/utils');
const { getService, pickWritableAttributes } = require('@strapi/plugin-content-manager/server/utils');

module.exports = (plugin) => {
    plugin.controllers['collection-types'].create = async (ctx) => {
        const { userAbility, user } = ctx.state;
        const { model } = ctx.params;
        const { body } = ctx.request;

        const totalEntries = await strapi.query(model).count();

        const entityManager = getService('entity-manager');
        const permissionChecker = getService('permission-checker').create({ userAbility, model });

        if (permissionChecker.cannot.create()) {
            return ctx.forbidden();
        }

        const pickWritables = pickWritableAttributes({ model });
        const pickPermittedFields = permissionChecker.sanitizeCreateInput;
        const setCreator = setCreatorFields({ user });

        const sanitizeFn = pipeAsync(pickWritables, pickPermittedFields, setCreator);

        const sanitizedBody = await sanitizeFn(body);

        // custom method to add agent as dependency to created flat
        const [agent] = await strapi.entityService.findMany('api::agent.agent', {
            filters: {
                admin: user.id,
            },
            populate: '*',
        });
        if (agent) sanitizedBody.agent = agent.id;
        // ====

        const entity = await entityManager.create(sanitizedBody, model);

        ctx.body = await permissionChecker.sanitizeOutput(entity);

        if (totalEntries === 0) {
            strapi.telemetry.send('didCreateFirstContentTypeEntry', { model });
        }
    };

    return plugin;
};
