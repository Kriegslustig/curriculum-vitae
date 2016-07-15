const langGetter = require('./lib/getLang.js')
const currentNavHighlighter = require('./lib/highlightCurrent.js')
const textUpdater = require('./lib/textUpdater.js')

const languages = {
  de: 'lebenslauf',
  en: 'curriculumVitae'
}

const getLang = langGetter(languages, 'en')

module.exports = (getText) => {
  const langNav = document.querySelector('.nav--lang')
  const main = document.querySelector('main')
  const updateText = textUpdater(() => getText(getLang()), main)
  const highlightCurrent = currentNavHighlighter(langNav, 'hash')
  updateText(true)
  highlightCurrent()
  window.addEventListener('hashchange', updateText)
  window.addEventListener('hashchange', highlightCurrent)
}

