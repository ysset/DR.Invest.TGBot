const { beautifyId } = require('../utils');
const { beautifyParams } = require('../utils');

const beautifyBigNum = (cost) => cost.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
/**
 * @type {{WELCOME: {first: string, second: string}, INPUT_ERROR: {date: string}, DELETED: {text: string}, WRITE_AGENT_INLINE: {text: string}, HOUSING_FULL_DESCRIPTION: (function(*): string), SERVER_ERROR: string, UN_AUTHORIZE: string, SAVED: string, NO_USERNAME: string, FAVORITE: {text: string}, lang: string, FULL_DESCRIPTION: {text: string}, WRITE_AGENT: {userText: (function(*): string), realtorText: (function(*): string)}, NO_FAVORITE_NOW: string, SEARCH: {text: string}, CONTROL_PANEL: {text: string}, COMPLETE_SEARCHING: {text: string}, DATE: string, SAVE_INLINE: {text: string}, SHORT_DESCRIPTION: (function(*): string), NEXT_INLINE: {text: string}, REPEAT_SEARCH_FLATS: {text: string}, START: {regex: RegExp, text: string}, GO_BACK_ACTION: {text: string}, DELETE_ACTION: {text: string}, NO_FLATS: string}}
 */
module.exports = {
    lang: 'ru',
    WELCOME: {
        first:
            '🇹🇷Турция сегодня — одна из самых удобных и безопасных стран для переезда. \n' +
            '\n' +
            'Здесь иностранцы могут быстро получить вид на жительство и даже турецкий паспорт, а сама Турция — гостеприимная и радушная страна с теплым морем. \n' +
            '\n' +
            'Осталось подобрать жилье! 🏡',
        second: 'На Ваш выбор роскошные виллы и апартаменты в новостройках, а также широкий выбор объектов недвижимости от собственников!',
    },
    INPUT_ERROR: {
        date: 'Неверно указанна дата',
        fullName: 'Неверно указанно ФИО',
        phoneNumber: 'Неверно указан номер телефона',
    },
    DATE: 'Пожалуйста введите даты\n' + 'пример:\n' + 'дд.мм.гггг - дд.мм.гггг\n' + '12.01.2022 - 17.01.2022',
    GET_USER_INFO: 'Пред началом работы необходимо указать данные для удобной связи с вами',
    ENTER_FULL_NAME: 'Пожалуйста введите ФИО\n' + 'пример\n' + 'Иванов Иван Иванович',
    ENTER_PHONE_NUMBER: 'Пожалуйста введите номер телефона\n' + 'пример\n' + '+79998881234\n',
    CONTROL_PANEL: {
        text: 'Поиск по фильтрам',
    },
    START: {
        text: '/start',
        regex: /\/start/,
    },
    NO_FLATS: 'К сожалению по вашему запросу ничего не найдено, пожалуйста измените фильтры',
    NO_USERNAME:
        'Для корректной работы сервиса установите себе имя пользователя Telegram в настройках.\n' +
        'После установки напишите в чат старт\n' +
        '\n' +
        'Username - Ваше имя пользователя в Telegram.\n' +
        'Пошаговая инструкция по установке имени пользователя.\n' +
        '\n' +
        ' 1. Нажмите кнопку «Настройки» в правом нижнем углу экрана\n' +
        '\n' +
        ' 2. Нажмите кнопку «Изм.» в правом верхнем углу экрана\n' +
        '\n' +
        ' 3. Нажмите на графу «Имя пользователя» в середине экрана\n' +
        '\n' +
        ' 4. Придумайте и впишите имя пользователя в свободную графу, затем нажмите «Готово» в верхнем правом углу\n' +
        '\n' +
        ' 5. Вернитесь в сервис и напишите в чат старт\n' +
        '\n' +
        'Готово! Теперь сервис работает корректно! Приятного использования!',
    SERVER_ERROR: 'К сожалению произошла ошибка, попробуйте еще раз или позже!',
    SAVED: 'Добавлено в избранное',
    FAVORITE: {
        text: 'Сохраненные❤️',
    },
    SEARCH: {
        text: 'Поиск 🔍',
    },
    COMPLETE_SEARCHING: {
        text: 'Продолжить поиск 🔍',
    },
    REPEAT_SEARCH_FLATS: {
        text: 'Искать Недвижимость заново',
    },
    NO_FAVORITE_NOW: 'У вас пока нет сохраненной недвижимости!',
    UN_AUTHORIZE: 'Кажется мы не смогли найти избранные квартиры, пожалуйста перезапустите бота!',
    WRITE_AGENT_INLINE: {
        text: 'Связаться с агентом',
    },
    WRITE_AGENT: {
        userText: (params) => {
            const { title, agentUsername, flatId, city, district } = beautifyParams(params);
            return (
                'Здравствуйте! \n\n' +
                'Благодарим Вас за использование нашего сервиса!\n\n' +
                'Представитель собственника ответит на любой ваш вопрос, для связи с ним перейдите по ссылке!\n\n' +
                `${city}, район ${district}\n\n` +
                `ID: ${beautifyId(flatId)}\n\n` +
                `${title}\n\n` +
                `https://t.me/${agentUsername}`
            );
        },
        realtorText: (params) => {
            const { username, flatId, city, district, table } = beautifyParams(params);
            return (
                'Здравствуйте! \n' +
                '\n' +
                `Пользователь https://t.me/${username} интересуется данным объектом \n` +
                '\n' +
                `ID: ${beautifyId(flatId)} \n` +
                `Город: ${city} \n` +
                `Район: ${district} \n\n` +
                'Пожалуйста, ответьте клиенту как можно скорее!\n\n' +
                'Ссылка на объект:\n' +
                `https://xatta.ru/admin/content-manager/collectionType/api::${table.toLowerCase()}.${table.toLowerCase()}/${flatId}`
            );
        },
    },
    HOUSING_FULL_DESCRIPTION: (params) => {
        let {
            cost,
            title,
            caption,
            city,
            district,
            neighborhood,
            layout,
            area,
            floors,
            furniture,
            yearOfConstruction,
            infrastructure,
            metersFromTheSea,
        } = beautifyParams(params);
        infrastructure = infrastructure?.map((el) => '• ' + el.title.trim() + ';').join('\n');
        furniture = furniture?.map((el) => '- ' + el.title.trim() + ';').join('\n');
        floors = floors?.map((el) => el.floor).join(' и ');

        return (
            `${title}\n\n` +
            `Цена: ${beautifyBigNum(cost)}\n\n` +
            `Город: ${city}\n\n` +
            `${district ? `Район: ${district}\n\n` : ''}` +
            `Микрорайон: ${neighborhood}\n\n` +
            `${metersFromTheSea ? `До Средиземного моря: ${beautifyBigNum(metersFromTheSea)}м\n\n` : ''}` +
            `Этаж: ${floors}\n\n` +
            `Апартаменты: ${layout}, ${area} м²\n\n` +
            `${caption}\n\n` +
            `${furniture ? `В апартаментах:\n${furniture} \n\n` : ''}` +
            `${infrastructure ? `Инфраструктура:\n${infrastructure}\n\n` : ''}` +
            `${yearOfConstruction ? `Год постройки: ${yearOfConstruction}\n\n` : ''}`
        );
    },
    SHORT_DESCRIPTION: (params) => {
        let { layout, area, floors, city, district, cost } = beautifyParams(params);
        floors = floors?.map((el) => el.floor).join(floors.length > 1 ? ' и ' : '');

        return (
            `Апартаменты${layout}, ${area} м², ${floors} этаж.\n` +
            `${city}, район ${district}.\n` +
            '\n' +
            `${beautifyBigNum(cost)} €\n`
        );
    },
    GO_BACK_ACTION: {
        text: '<<Назад',
    },
    DELETE_ACTION: {
        text: 'Удалить из избранного',
    },
    DELETED: {
        text: 'Квартира удалена из избранного.',
    },
    FULL_DESCRIPTION: {
        text: 'Подробное описание',
    },
    SAVE_INLINE: {
        text: 'Сохранить',
    },
    NEXT_INLINE: {
        text: 'Далее',
    },
};
