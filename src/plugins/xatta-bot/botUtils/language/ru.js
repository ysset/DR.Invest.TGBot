module.exports = {
    lang: 'ru',
    WELCOME:
        'На Ваш выбор роскошные виллы и апартаменты в новостройках напрямую от застройщиков!\n' +
        'Для комфортного поиска используйте фильтры.',
    MENU_BUTTON: 'Меню',
    CONTROL_PANEL: {
        text: 'Поиск по фильтрам',
    },
    START: {
        text: '/start',
        regex: /\/start/,
    },
    NO_FLATS: 'К сожалению квартиры закончились(',
    NO_CARS: 'К сожалению машины закончились(',
    SERVER_ERROR: 'К сожалению произошла ошибка, попробуйте еще раз или позже!',
    SAVED: 'Добавлено в избранное',
    FAVORITE: {
        text: 'Сохраненные❤️',
    },
    FAVORITE_HOUSINGS: {
        text: 'Недвижимость ❤️',
    },
    SEARCH: {
        text: 'Поиск 🔍',
    },
    SEARCH_FLATS: {
        text: 'Недвижимость 🔍',
    },
    SELECT_SUBGROUP: {
        text: 'Выберите подгруппу',
    },
    REPEAT_SEARCH_FLATS: {
        text: 'Искать Недвижимость заново',
    },
    NO_FAVORITE_NOW: 'У вас пока нет сохраненной недвижимости!',
    UN_AUTHORIZE: 'Кажется мы не смогли найти избранные квартиры, пожалуйста перезапустите бота!',
    WRITE_AGENT_INLINE: {
        text: 'Связаться с застройщиком',
    },
    WRITE_AGENT: {
        userText: (username, agentUsername) =>
            `${username} вот ссылка на риелтора https://t.me/${agentUsername}. \nПожалуйста напишите ему =) `,
        realtorText: (username, agentUsername) =>
            `${agentUsername} пользователь https://t.me/${username} интересуется вашей квартирой. `,
        orderInfo: ({ id, name, cost, city, district, locationUrl, paymentMethod }) =>
            `Квартира: \nid: ${id} \nНазвание: ${name} \nЦена: ${cost} \nАдрес: ${city} ${district}${
                locationUrl ? ` \nРасположение: ${locationUrl}` : ''
            } \n${paymentMethod}`,
    },
    HOUSING_FULL_DESCRIPTION: ({
        name,
        developerName,
        cost,
        apartments,
        city,
        district,
        metersFromTheSea,
        locationUrl,
        caption,
        area,
        infrastructure,
        apartmentEquipment,
        constructionCompletionDate,
    }) => {
        // 1+1 Duplex
        // 1+1 Garden Duplex
        // 1+1 Penthouse
        apartments = apartments
            ?.map(({ layout = String }) => {
                console.log(layout, layout.includes('Duplex'));
                if (layout.includes('Duplex')) {
                    if (layout.includes('Garden')) {
                        return 'Гарден-дуплекс' + layout.replace('Garden Duplex', '');
                    }
                    return 'Дуплекс' + layout.replace('Duplex', '');
                }
                return 'Апартаменты' + layout;
            })
            .join('\n');
        infrastructure = infrastructure?.map((el) => el.title.trim()).join('\n');
        apartmentEquipment = apartmentEquipment?.map((el) => el.title.trim()).join(', ');
        const main = `Комплекс: ${name}
        \nЗастройщик: ${developerName}
        \nЦена от € ${cost}
        \nГород: ${city} 
        \nРайон: ${district}
        \nГеолокация: ${locationUrl}
        \nДо Средиземного моря: ${metersFromTheSea}м
        \n${apartments ? `Планировки: \n${apartments}` : ''}`;
        const second = `
        \nОписание комплекса:\n${caption} Площадь территории комплекса: ${area}. Фурнитура апартаментов: ${apartmentEquipment}
        \nИнфраструктура комплекса: \n${infrastructure}
        \nСдача объекта: ${constructionCompletionDate}`;
        return main + second;
    },
    CHOOSE_THE_ACTION: {
        text: (flatId) => {
            if (flatId < 10) return `Id квартиры: #000${flatId} \nВыберите действие:`;
            if (flatId > 10 && flatId < 100) return `Id квартиры: #00${flatId} \nВыберите действие:`;
            if (flatId > 100 && flatId < 1000) return `Id квартиры: #0${flatId} \nВыберите действие:`;
            return `Id квартиры: #${flatId} \nВыберите действие:`;
        },
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
        text: 'Следующая',
    },
};
