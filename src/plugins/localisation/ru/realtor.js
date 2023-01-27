const { beautifyId, translateApartments, getMonth, beautifyBigNum } = require('../../utils/localisation');

module.exports = {
    lang: 'ru',
    WELCOME: {
        first:
            'Агентство недвижимости Arbat Homes  приветствует Вас в нашем онлайн-каталоге недвижимости в Турции!\n' +
            '\n' +
            'На Ваш выбор роскошные виллы и апартаменты в новостройках, а также широкий выбор объектов недвижимости от собственников!\n',
        second:
            'Для поиска объектов по фильтрам нажмите «Поиск 🔍». Установите подходящие для вас фильтры, после — нажмите «Поиск»!\n' +
            '\n' +
            'P.s. Для корректной работы сервис-бота нам необходим доступ к IP-адресу и основной информации об устройстве.',
    },
    SEARCH_BY: {
        text: 'Поиск по фильтрам 🔍',
    },
    GET_USER_INFO: 'Для облегчения взаимодействия пожалуйста введите ваши ФИО и номер телефона',
    ENTER_PHONE_NUMBER: 'Для продолжения поиска подтвердите Ваш номер телефона',
    MENU_BUTTON: 'Меню',
    CONTROL_PANEL: {
        text: 'Фильтры 🔍',
    },
    INF_TOUR_BUTTON: {
        text: 'Хочу на бесплатный обзорный тур 🚀!',
    },
    INF_TOUR: 'Вы записаны на бесплатный обзорный тур! Наш менеджер свяжется с вами в ближайшее время!',
    INF_TOUR_REALTOR: ({ username, phoneNumber }) =>
        `Пользователь хочет на инфотур\n` +
        `${username ? `@${username}` : ''}\n` +
        `${phoneNumber ? `${phoneNumber}` : ''}`,
    CANCEL_INFO_TOUR_INLINE: {
        text: 'Не хочу на инфотур',
    },
    INFO_TOUR_CANCELED: 'Инфотур отменен',
    GET_USER_INFO_SUCCESS: '✅',
    START: {
        text: '/start',
        regex: /\/start/,
    },
    GET_USER_PHONE_BUTTON: {
        text: 'Подтвердить номер телефона и продолжить поиск',
    },
    NO_FLATS: 'Вы посмотрели все объекты по заданным фильтрам!',
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
        text: 'Сохраненные ❤️',
    },
    FAVORITE_HOUSINGS: {
        text: 'Недвижимость ❤️',
    },
    SEARCH: {
        text: 'Поиск 🔍',
    },
    CONTINUE_SEARCHING: {
        text: 'Продолжить поиск 🔍',
    },
    CONTINUE_SEARCHING_MESSAGE: 'Продолжить поиск?',
    SELECT_SUBGROUP: {
        text: 'Выберите подгруппу',
    },
    REPEAT_SEARCH_FLATS: {
        text: 'Повторный поиск по фильтрам',
    },
    NO_FAVORITE_NOW: 'У вас пока нет сохраненной недвижимости!',
    UN_AUTHORIZE: 'Кажется мы не смогли найти избранные объекты, пожалуйста перезапустите бота!',
    WRITE_AGENT_INLINE: {
        text: 'Связаться с агентом',
    },
    WRITE_INLINE: {
        complex: {
            text: 'Узнать цену',
        },
        villa: {
            text: 'Узнать цену',
        },
        owner: {
            text: 'Узнать цену',
        },
    },
    CANCEL_INTEREST_INLINE: { text: 'Отменить заявку' },
    CANCEL_INTEREST: {
        user: 'Ваша заявка отменена',
        realtor: (params) => {
            const { username, phoneNumber } = params;
            return (
                'Пользователь:\n\n' +
                `${username ? `https://t.me/${username}\n` : ''}` +
                `${phoneNumber}\n\n` +
                'Больше НЕ интересуется данным объектом \n\n'
            );
        },
    },
    INPUT_ERROR: {
        phoneNumber: 'Пожалуйста, введите корректный номер телефона',
        fullName: 'Пожалуйста, введите корректное имя',
    },
    WRITE_AGENT: {
        userText: {
            complex: ({ agentUsername }) => {
                return (
                    `Менеджер агентства ${process.env.AGENCY_NAME} свяжется с Вами в ближайшее время и ответит на любой Ваш вопрос!\n` +
                    '\n' +
                    'Вы также можете связаться с менеджером по данной ссылке:\n' +
                    `https://t.me/${agentUsername}`
                );
            },
            villa: ({ agentUsername }) => {
                return (
                    `Менеджер агентства ${process.env.AGENCY_NAME} свяжется с Вами в ближайшее время и ответит на любой Ваш вопрос!\n` +
                    '\n' +
                    'Вы также можете связаться с менеджером по данной ссылке:\n' +
                    `https://t.me/${agentUsername}`
                );
            },
            owner: ({ agentUsername }) => {
                return (
                    `Менеджер агентства ${process.env.AGENCY_NAME} свяжется с Вами в ближайшее время и ответит на любой Ваш вопрос!\n` +
                    '\n' +
                    'Вы также можете связаться с менеджером по данной ссылке:\n' +
                    `https://t.me/${agentUsername}`
                );
            },
        },
        realtorText: (params) => {
            const { username, flatId, city, district, phoneNumber } = params;
            return (
                'Здравствуйте! \n\n' +
                'Пользователь:\n' +
                `${username ? `https://t.me/${username}\n` : ''}` +
                `${phoneNumber}\n\n` +
                'Интересуется данным объектом \n\n' +
                `ID: ${beautifyId(flatId)} \n` +
                `Город: ${city} \n` +
                `Район: ${district} \n\n` +
                'Пожалуйста, ответьте клиенту как можно скорее!'
            );
        },
    },
    HOUSING_FULL_DESCRIPTION: {
        complex: (params) => {
            let {
                apartments,
                city,
                district,
                metersFromTheSea,
                caption,
                area,
                infrastructure,
                apartmentEquipment,
                constructionCompletionDate,
                paymentMethod,
                webSiteId,
            } = params;
            apartments = translateApartments(apartments);
            infrastructure = infrastructure?.map((el) => '• ' + el.title.trim() + ';').join('\n');
            apartmentEquipment = apartmentEquipment?.map((el) => '- ' + el.title.trim() + ';').join('\n');
            const [month, year] = constructionCompletionDate && constructionCompletionDate.split('.');
            let date = null;

            if (month && month <= 12 && year) date = `${getMonth('ru', month)} ${year}`;

            return (
                `${webSiteId ? `<b> ID с сайта: ${webSiteId} </b>` : ''} \n\n` +
                `Город: ${city}\n\n` +
                `Район: ${district}\n\n` +
                `${area ? `Tерритория комплекса: ${beautifyBigNum(area)} м²\n\n` : ''}` +
                `До Средиземного моря: ${beautifyBigNum(metersFromTheSea)} м\n\n` +
                `${paymentMethod ? `Способ оплаты: ${paymentMethod}\n\n` : ''}` +
                `${caption}\n\n` +
                `${apartments ? `Планировки апартаментов: \n${apartments} \n\n` : ''}` +
                'В апартаментах:\n' +
                `${apartmentEquipment} \n\n` +
                'Инфраструктура комплекса: \n' +
                `${infrastructure} \n\n` +
                `Сдача объекта: ${date}\n\n`
            );
        },
        villa: (params) => {
            let {
                city,
                district,
                metersFromTheSea,
                apartments,
                caption,
                infrastructure,
                apartmentEquipment,
                constructionCompletionDate,
                paymentMethod,
                webSiteId,
            } = params;
            apartments = translateApartments(apartments);
            infrastructure = infrastructure?.map((el) => '• ' + el.title.trim() + ';').join('\n');
            apartmentEquipment = apartmentEquipment?.map((el) => '- ' + el.title.trim() + ';').join('\n');
            const [month, year] = constructionCompletionDate && constructionCompletionDate.split('.');
            let date = null;

            if (month && month <= 12 && year) date = `${getMonth('ru', month)} ${year}`;

            return (
                `${webSiteId ? `<b> ID с сайта: ${webSiteId} </b>` : ''} \n\n` +
                `Город: ${city}\n\n` +
                `Район: ${district}\n\n` +
                `${
                    metersFromTheSea ? `До Средиземного моря: ${beautifyBigNum(metersFromTheSea)} м\n\n` : ''
                }` +
                `${paymentMethod ? `Способ оплаты: ${paymentMethod}\n\n` : ''}` +
                `${caption}\n\n` +
                `${apartments ? `Планировки: \n${apartments} \n\n` : ''}` +
                'В вилле:\n' +
                `${apartmentEquipment} \n\n` +
                'Инфраструктура: \n' +
                `${infrastructure} \n\n` +
                `${date ? `Сдача объекта: ${date}\n\n` : ''}`
            );
        },
        owner: (params) => {
            let {
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
                paymentMethod,
                webSiteId,
            } = params;
            infrastructure = infrastructure?.map((el) => '• ' + el.title.trim() + ';').join('\n');
            furniture = furniture?.map((el) => '- ' + el.title.trim() + ';').join('\n');
            floors = floors?.map((el) => el.floor).join(' и ');

            return (
                `${webSiteId ? `<b> ID с сайта: ${webSiteId} </b>` : ''} \n\n` +
                `Город: ${city}\n\n` +
                `${district ? `Район: ${district}\n\n` : ''}` +
                `${neighborhood ? `Микрорайон: ${neighborhood}\n\n` : ''}` +
                `${
                    metersFromTheSea ? `До Средиземного моря: ${beautifyBigNum(metersFromTheSea)}м\n\n` : ''
                }` +
                `Этаж: ${floors}\n\n` +
                `Апартаменты: ${layout}, ${area} м²\n\n` +
                `${paymentMethod ? `Способ оплаты: ${paymentMethod}\n\n` : ''}` +
                `${caption}\n\n` +
                `${furniture ? `В апартаментах:\n${furniture} \n\n` : ''}` +
                `${infrastructure ? `Инфраструктура:\n${infrastructure}\n\n` : ''}` +
                `${yearOfConstruction ? `Год постройки: ${yearOfConstruction}\n\n` : ''}`
            );
        },
    },
    AGENT_SHORT_DESCRIPTION: {
        owner: (params) => {
            let { title, layout, area, floors, city, district, webSiteId, developer } = params;
            floors = floors?.map((el) => el.floor).join(floors.length > 1 ? ' и ' : '');

            return (
                `<b>${title}</b>\n\n` +
                `${webSiteId ? `<b> ID с сайта: ${webSiteId} </b>` : ''} \n\n` +
                `Апартаменты${layout}, ${area} м², ${floors} этаж.\n` +
                `${city}, район ${district}.\n\n` +
                `${developer ? `Застройщик: ${developer}` : ''}`
            );
        },
        complex: (params) => {
            let { apartments, city, district, title, webSiteId, developer } = params;
            apartments = translateApartments(apartments);

            return (
                `<b>${title}</b>\n\n` +
                `${webSiteId ? `<b> ID с сайта: ${webSiteId} </b>` : ''} \n\n` +
                `${city}, район ${district}.\n\n` +
                `${apartments ? `Апартаменты:\n${apartments}\n\n` : ''}` +
                `${developer ? `Застройщик: ${developer}` : ''}`
            );
        },
        villa: (params) => {
            let { apartments, city, district, title, webSiteId, developer } = params;
            apartments = translateApartments(apartments);

            return (
                `<b>${title}</b>\n\n` +
                `${webSiteId ? `<b> ID с сайта: ${webSiteId} </b>` : ''} \n\n` +
                `${city}, район ${district}.\n\n` +
                `${apartments ? `Апартаменты:\n${apartments}\n\n` : ''}` +
                `${developer ? `Застройщик: ${developer}` : ''}`
            );
        },
    },
    SHORT_DESCRIPTION: {
        owner: (params, favorite) => {
            let { layout, area, floors, city, district, webSiteId } = params;
            floors = floors?.map((el) => el.floor).join(floors.length > 1 ? ' и ' : '');

            return (
                `${webSiteId ? `<b> ID с сайта: ${webSiteId} </b>` : ''} \n\n` +
                `Апартаменты${layout}, ${area} м², ${floors} этаж.\n` +
                `${city}, район ${district}.\n\n` +
                `${favorite ? '❤️ Эти апартаменты в избранном ❤️' : ''}`
            );
        },
        complex: (params, favorite) => {
            let { apartments, city, district, webSiteId } = params;
            apartments = translateApartments(apartments);

            return (
                `${webSiteId ? `<b> ID с сайта: ${webSiteId} </b>` : ''} \n\n` +
                `${city}, район ${district}.\n\n` +
                `${apartments ? `Апартаменты:\n${apartments}\n\n` : ''}` +
                `${favorite ? '❤️ Этот комплекс в избранном ❤️' : ''}`
            );
        },
        villa: (params, favorite) => {
            let { apartments, city, district, webSiteId } = params;
            apartments = translateApartments(apartments);

            return (
                `${webSiteId ? `<b> ID с сайта: ${webSiteId} </b>` : ''} \n\n` +
                `${city}, район ${district}.\n\n` +
                `${apartments ? `Апартаменты:\n${apartments}\n\n` : ''}` +
                `${favorite ? '❤️ Эта вилла в избранном ❤️' : ''}`
            );
        },
    },
    CHOOSE_THE_ACTION: {
        text: (flatId) => `ID: ${beautifyId(flatId)} \nВыберите действие:`,
    },
    GO_BACK_ACTION: {
        text: '<<Назад',
    },
    DELETE_ACTION: {
        text: 'Удалить из избранного',
    },
    DELETED: {
        text: 'Объект удален из избранного.',
    },
    FULL_DESCRIPTION: {
        text: 'Подробное описание',
    },
    SAVE_INLINE: {
        text: 'Сохранить ❤️',
    },
    NEXT_INLINE: {
        text: 'Следующий',
    },
    PREVIOUS_INLINE: {
        text: 'Назад',
    },
};
