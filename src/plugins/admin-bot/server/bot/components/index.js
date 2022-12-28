const callbacks = require('./componentList');
const inlineCallBacks = {
    ENTER_COMMAND: callbacks.ENTER_COMMAND,
    REGISTER: callbacks.REGISTER,
    HELP: callbacks.HELP,
    DELETE: callbacks.DELETE_CITIES,
};

module.exports = {
    commands: {
        START: {
            regex: /\/start/,
            fn: async (msg) => inlineCallBacks.ENTER_COMMAND(msg),
        },
        HELP: {
            regex: /\/help/,
            fn: async (msg) => inlineCallBacks.HELP(msg),
        },
        REGISTRATION: {
            regex: /\/registration/,
            fn: async (msg) => inlineCallBacks.REGISTER(msg),
        },
        DELETE_CITIES: {
            regex: /\/delete/,
            fn: async (msg) => inlineCallBacks.DELETE(msg),
        },
        REF: {
            regex: /\/ref/,
            fn: async (bot) => {
                bot.reply('Лучшие комплексы и проекты в нашем боте @ArbatHomesBot', {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Посмотреть объекты',
                                    url: 'https://t.me/ArbatHomesBot',
                                },
                            ],
                        ],
                    },
                });
            },
        },
    },
    inlineCallBacks,
};
