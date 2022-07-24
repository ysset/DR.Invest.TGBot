const recommendations = require('../../../../botUtils/botManager/recomendationManager');
const { getUser } = require('../../../../botUtils/userController');

module.exports = async (query) => {
    const { user } = await getUser(query);
    const { chatId, data, localisation, messageId } = query;

    if (!user) return;

    await recommendations.remove({
        filter: {
            where: {
                telegramID: query.from.id,
            },
            apiKey: 'api::telegram-user.telegram-user',
        },
        data,
        user,
    });

    await strapi.bots.alanyaBot.deleteMessage(chatId, messageId);

    return await strapi.bots.alanyaBot
        .sendMessage(chatId, localisation.DELETED.text, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            ...localisation?.FAVORITE_FLATS,
                            callback_data: JSON.stringify({
                                action: 'FAVORITE_FLATS',
                            }),
                        },
                    ],
                    [
                        {
                            ...localisation?.GO_BACK_ACTION,
                            callback_data: JSON.stringify({
                                action: 'ENTER_COMMAND',
                            }),
                        },
                    ],
                ],
            },
        })
        .catch((e) => {
            console.error(e);
        });
};
