const lang = {
  currLang: null,
  ru: {
    WELCOME: "Добро пожаловать в DR.Invest Бот!",
    FAVORITE: {
      text: 'Закладки ⭐',
      regex: /Закладки ⭐/,
      description: "Квартиры которые вам понравились.",
    },
    SEARCH_FLAT: {
      text: "Поиск 🔍",
      regex: /Поиск 🔍/,
      description: "Начать поиск новых квартир.",
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
      callback_data: JSON.stringify({
        action: "NEXT"
      })
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
