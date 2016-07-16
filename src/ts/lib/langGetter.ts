/// <reference path="./Language.ts" />

const Language = require('./language.ts')

const getHash = () : string | void => {
  const hash = window.location.hash.substr(1)
  if (hash.length > 0) return hash
}

const getNavigatorLanguage = () : string | void => {
  const bcp47lang = navigator.language
  const lang = bcp47lang.substr(0, 2)
  if (lang.length === 2) {
    window.location.hash = `#${lang}`
    return lang
  }
}

export = (
  translations : Language.Translation,
  defaultLang : Language.Language
) : () => string =>
  () : string => {
    const lang = <Language.Language>(getHash() || getNavigatorLanguage() || defaultLang)
    return translations[lang]
  }

