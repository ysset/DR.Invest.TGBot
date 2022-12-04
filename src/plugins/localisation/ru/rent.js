const { beautifyParams, beautifyId, beautifyBigNum } = require('../../utils');

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
    ENTER_PHONE_NUMBER: 'Пожалуйста введите номер телефона\n' + 'пример\n' + '+7 999 888 12 34\n',
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
    SHORT_DESCRIPTION: ({ localisation, favorite }) => {
        let { title, layout, area, floors, city, district, cost } = localisation;
        floors = floors?.map((el) => el.floor).join(floors.length > 1 ? ' и ' : '');

        return (
            `<b>${title}</b>\n\n` +
            `Апартаменты${layout}, ${area} м², ${floors} этаж.\n` +
            `${city}, район ${district}.\n\n` +
            `<b>${beautifyBigNum(cost)} €</b>\n\n` +
            `${favorite ? '❤️ Эти апартаменты в избранном ❤️' : ''}`
        );
    },
    GO_BACK_ACTION: { text: '<<Назад' },
    DELETE_ACTION: { text: 'Удалить из избранного' },
    DELETED: { text: 'Квартира удалена из избранного.' },
    FULL_DESCRIPTION: { text: 'Подробное описание' },
    SAVE_INLINE: { text: 'Сохранить' },
    NEXT_INLINE: { text: 'Далее' },
    WRITE_INLINE: { text: 'Мне интересно' },
    PREVIOUS_INLINE: { text: 'Назад' },
};
