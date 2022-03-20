const lang = {
  currLang: null,
  ru: {
    WELCOME: {
      drInvest: "Добро пожаловать в DR.Invest Бот!",
      alanyaBot: "Добро пожаловать в Alanya.Live Бот!"
    },
    NO_FLATS: "К сожалению пока нет новых квартир, пожалуйста, попробуйте позже!",
    NO_CARS: "К сожалению пока нет новых машин, пожалуйста, попробуйте позже!",
    SERVER_ERROR: "К сожалению произошла ошибка, попробуйте еще раз или позже!",
    FAVORITE: {
      text: 'Закладки ⭐',
      regex: /Закладки ⭐/,
      description: "Избранные товары.",
    },
    FAVORITE_FLATS: {
      text: 'Недвижимость ⭐',
      regex: /Недвижимость ⭐/,
      description: "Квартиры которые вам понравились.",
    },
    FAVORITE_CARS: {
      text: 'Машины ⭐',
      regex: /Машины ⭐/,
      description: "Машины которые вам понравились.",
    },
    SEARCH_FLAT: {
      text: "Квартиры 🔍",
      regex: /Квартиры 🔍/,
      description: "Найдите себе уютный уголок!",
    },
    SEARCH_CAR: {
      text: "Машины 🔍",
      regex: /Машины 🔍/,
      description: "Найдите машину своей мечты!",
    },
    NO_FAVORITE_NOW: "У вас пока нет сохраненных квартир!",
    UN_AUTHORIZE: "Кажется мы не смогли найти избранные квартиры, пожалуйста перезапустите бота!",
    WRITE_AGENT_INLINE: {
      text: "Связаться с агентом",
    },
    SAVE_INLINE: {
      text: "Сохранить",
    },
    NEXT_INLINE: {
      text: "Следующая",
    },
  }
}

const userLang = () => {
  if (lang.currLang)
    return lang[lang.currLang]
};

module.exports = {
  userLang,
  lang
}
