const getHash = () => {
  const hash = window.location.hash.substr(1)
  if (hash.length > 0) return hash
}

const getNavigatorLanguage = () => {
  const bcp47lang = navigator.language
  const lang = bcp47lang.substr(0, 2)
  if (lang.length === 2) {
    window.location.hash = `#${lang}`
    return lang
  }
}

module.exports = (languages, defaultLang) => () => {
  const lang = getHash() || getNavigatorLanguage() || defaultLang
  if (languages[lang]) {
    return languages[lang]
  }
}

