/// <reference path="./Language.ts" />

import getHash from './getHash.ts'

const Language = require('./language.ts')

const getNavigatorLanguage = () : string | void => {
  const bcp47lang = navigator.language
  const lang = bcp47lang.substr(0, 2)
  if (lang.length === 2) {
    window.location.hash = `#${lang}`
    return lang
  }
}

export default (
  translations : Language.Translation,
  defaultLang : Language.Language
) : () => string =>
  () : string => {
    const lang = <Language.Language>(getHash() || getNavigatorLanguage() || defaultLang)
    return translations[lang]
  }

