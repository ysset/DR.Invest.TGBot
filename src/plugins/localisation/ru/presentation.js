const { beautifyId, beautifyBigNum, translateApartments, getMonth } = require('../../utils/localisation');
module.exports = {
    lang: 'ru',
    start: 'Здравствуйте, Я — бот-презентация, расскажу вам все о сервисе в мельчайших подробностях!',
    startButtonInline: { text: 'Поехали🚀!' },
    startTour:
        'Сейчас перед вами внизу экрана находятся 3 кнопки — это панель управления! Расскажу о функционале кнопок!',
    filtersDescription:
        '«Фильтры 🔍» \n' +
        'Кнопка быстрого функционала, нужна для того, чтобы установить фильтры и начать поиск' +
        'Нажмите на нее и установите подходящие для вас фильтры, после — нажмите «Поиск»!\n' +
        'P.s. Вам вылетит сообщение от Telegram об IP📍, не пугайтесь — это стандартное предупреждение при переходе по внешней ссылке)',
    savedDescription:
        '«Сохраненные ❤️» \n' +
        'Кнопка быстрого функционала, здесь будут находиться все объекты, которые вы сохранили.',
    infoTourDescription:
        '«Хочу на бесплатный обзорный тур 🚀!» \n' +
        'Кнопка быстрого функционала, служит лид-колодцем для мгновенной связи с агентством. Нужна клиентам, которые уже знают, чего хотят.\n',
    joke: 'Вы были у меня внутри. Теперь вы больше, чем простой пользователь… шутка)',
    onFilterDescription:
        'Вы задали мне параметры с помощью фильтров — я отправил вам индивидуально оформленное краткое описание подходящего объекта!',
    buttons: 'Под каждым объектом у меня есть кнопки, вот они, слева - направо:',
    saveButtonDescription:
        '«Сохранить ❤️» \n' +
        'Если объект вам понравился — жмите на эту кнопку! А я добавлю этот объект в сохраненные, чтобы вы его не потеряли и сообщу боту-администратору о ваших предпочтениях!',
    nextButtonDescription: '«Далее».\n' + ' Хотите посмотреть следующий объект? - Смело жмите на эту кнопку!',
    interestButtonDescription:
        '«Мне интересно».\n' +
        'Кнопка нужна для связи с менеджером по выбранному объекту и в добавок служит лид-магнитом! Вернемся к ней позже)',
    fullDescriptionDescription:
        '«Подробное описание». \n' +
        'Объект вам приглянулся? - Жмите на кнопку и узнайте о нем все! Нажмите на эту кнопку!',
    descAdd:
        'Вся нужная информация — в одном сообщении! Можно изучить самому или поделиться с другом! Удобно, не правда ли?)',
    continuePressNext: 'Продолжайте листать объекты, используя кнопку «Далее»',
    getNumber:
        'Готово! Вы посмотрели 5 объектов, оценили меня, и, конечно, хотите продолжить поиск. Для этого я прошу вас подтвердить номер телефона по кнопке снизу, ничего сложного!)',
    gotNumber:
        'Готово! Я получил ваш настоящий номер телефона, а вы - возможность дальше выбирать объекты. Все в выигрыше!',
    interestDescription:
        'Возвращаемся к кнопке «Мне интересно».\n' +
        'Нажимая на нее, вы даете мне понять, что этот объект вам интересен, а я передаю заявку боту-администратору! Нажмите на нее!',
    adminBotMsg: 'Бот-администратор получает вот такое сообщение:',
    adminMsgDescription:
        'Эта заявка мгновенно приходит директору агентства,  менеджеру по городу, менеджеру по району и обычным агентам  прямо в телеграмм! Пропустить нельзя, принять!',
    CancelInterestButtonDesc:
        'Чтобы не беспокоить по ошибке, у клиента есть возможность отменить заявку. Для этого нужно нажать на кнопку «Отменить заявку». И никакой Гали!',

    freeTourStart: 'Вернемся к кнопкам в меню! Нажмите на кнопку «Хочу на бесплатный обзорный тур 🚀!»',
    freeTourDescription:
        'Вы оставили заявку на обзорный тур, а бот-администратор получил такое сообщение о вашем намерении и с вашим контактом. И опять все в выигрыше!',
    cancelFreeTourDescription:
        'Чтобы не беспокоить по ошибке, у клиента также есть возможность отменить заявку. Для этого нужно нажать на кнопку «Отменить заявку». Опять без Гали!',

    favoriteDescription:
        ' Вернемся к кнопкам в меню! Кнопка «Сохраненные ❤️» — здесь хранятся все объекты, которые вы сохранили. \n' +
        'Рассматриваете покупку? - Жмите «Мне интересно»\n' +
        'Разонравился объект? - Жмите «Удалить из избранного»\n' +
        'Хотите узнать объект подробнее? - Жмите «Подробное описание»\n',

    theEnd:
        'Наша экскурсия подошла к концу…но не наше общение!\n' +
        '\n' +
        'У вас остались вопросы — напишите на наш бизнес-аккаунт @XattaProject\n' +
        '\n' +
        'Хотите получить бесплатную демоверсию или заказать сервис-бота — оформите заявку через наш сайт www.xattapro.tilda.ws или напишите на бизнес-аккаунт @XattaProject\n' +
        '\n' +
        'Мы замечательно провели время и очень рады знакомству с вами!\n' +
        '\n' +
        'С Уважением, команда Xatta Project и я, ваш скромный бот-презентация!',

    ENTER_PHONE_NUMBER: 'Для продолжения поиска подтвердите Ваш номер телефона',
    GET_USER_INFO_SUCCESS: '✅',
    INF_TOUR: 'Вы записаны на бесплатный обзорный тур! Наш менеджер свяжется с вами в ближайшее время!',

    writeAgent: {
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
    shortDescription: {
        owner: (params, favorite) => {
            let { title, layout, area, floors, city, district, cost } = params;
            floors = floors?.map((el) => el.floor).join(floors.length > 1 ? ' и ' : '');

            return (
                `<b>${title}</b>\n\n` +
                `Апартаменты${layout}, ${area} м², ${floors} этаж.\n` +
                `${city}, район ${district}.\n\n` +
                `<b>${beautifyBigNum(cost)} €</b>\n\n` +
                `${favorite ? '❤️ Эти апартаменты в избранном ❤️' : ''}`
            );
        },
        complex: (params, favorite) => {
            let { apartments, city, district, cost, title } = params;
            apartments = translateApartments(apartments);

            return (
                `<b>${title}</b>\n\n` +
                `${city}, район ${district}.\n\n` +
                `${apartments ? `Апартаменты:\n${apartments}\n\n` : ''}` +
                `<b>от ${beautifyBigNum(cost)} €</b>\n\n` +
                `${favorite ? '❤️ Этот комплекс в избранном ❤️' : ''}`
            );
        },
        villa: (params, favorite) => {
            let { apartments, city, district, cost, title } = params;
            apartments = translateApartments(apartments);

            return (
                `<b>${title}</b>\n\n` +
                `${city}, район ${district}.\n\n` +
                `${apartments ? `Апартаменты:\n${apartments}\n\n` : ''}` +
                `<b>от ${beautifyBigNum(cost)} €</b>\n\n` +
                `${favorite ? '❤️ Эта вилла в избранном ❤️' : ''}`
            );
        },
    },
    infoTourRealtor: ({ username }) => `@${username} хочет на инфотур`,
    housingFullDescription: {
        complex: (params) => {
            let {
                title,
                cost,
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
            } = params;
            apartments = translateApartments(apartments);
            infrastructure = infrastructure?.map((el) => '• ' + el.title.trim() + ';').join('\n');
            apartmentEquipment = apartmentEquipment?.map((el) => '- ' + el.title.trim() + ';').join('\n');
            const [month, year] = constructionCompletionDate && constructionCompletionDate.split('.');
            let date = null;

            if (month && month <= 12 && year) date = `${getMonth('ru', month)} ${year}`;

            return (
                `<b>${title}</b>\n\n` +
                `<b>Цена от € ${beautifyBigNum(cost)}</b>\n\n` +
                `Город: ${city}\n\n` +
                `Район: ${district}\n\n` +
                `Tерритория комплекса: ${beautifyBigNum(area)} м²\n\n` +
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
                title,
                cost,
                city,
                district,
                metersFromTheSea,
                apartments,
                caption,
                infrastructure,
                apartmentEquipment,
                constructionCompletionDate,
                paymentMethod,
            } = params;
            apartments = translateApartments(apartments);
            infrastructure = infrastructure?.map((el) => '• ' + el.title.trim() + ';').join('\n');
            apartmentEquipment = apartmentEquipment?.map((el) => '- ' + el.title.trim() + ';').join('\n');
            const [month, year] = constructionCompletionDate && constructionCompletionDate.split('.');
            let date = null;

            if (month && month <= 12 && year) date = `${getMonth('ru', month)} ${year}`;

            return (
                `<b>${title}</b>\n\n` +
                `<b>Цена от € ${beautifyBigNum(cost)}</b>\n\n` +
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
                paymentMethod,
            } = params;
            infrastructure = infrastructure?.map((el) => '• ' + el.title.trim() + ';').join('\n');
            furniture = furniture?.map((el) => '- ' + el.title.trim() + ';').join('\n');
            floors = floors?.map((el) => el.floor).join(' и ');

            return (
                `<b>${title}</b>\n\n` +
                `<b>Цена: ${beautifyBigNum(cost)}</b>\n\n` +
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

    CANCEL_INTEREST_INLINE: { text: 'Отменить заявку' },
    CONTROL_PANEL: {
        text: 'Фильтры 🔍',
    },
    INF_TOUR_BUTTON: {
        text: 'Хочу на бесплатный обзорный тур 🚀!',
    },
    CANCEL_INFO_TOUR_INLINE: {
        text: 'Не хочу на инфотур',
    },
    GET_USER_PHONE_BUTTON: {
        text: 'Подтвердить номер телефона и продолжить поиск',
    },
    FAVORITE: {
        text: 'Сохраненные ❤️',
    },
    FAVORITE_HOUSINGS: {
        text: 'Недвижимость ❤️',
    },
    SEARCH: {
        text: 'Поиск 🔍',
    },
    COMPLETE_SEARCHING: {
        text: 'Продолжить поиск 🔍',
    },
    SELECT_SUBGROUP: {
        text: 'Выберите подгруппу',
    },
    REPEAT_SEARCH_FLATS: {
        text: 'Повторный поиск по фильтрам',
    },
    WRITE_AGENT_INLINE: {
        text: 'Связаться с агентом',
    },
    WRITE_INLINE: {
        complex: {
            text: 'Мне интересно',
        },
        villa: {
            text: 'Мне интересно',
        },
        owner: {
            text: 'Мне интересно',
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
        text: 'Далее',
    },
    PREVIOUS_INLINE: {
        text: 'Назад',
    },
};
