const GetLang = require('./lib/getLang.js')
const currentNavHighlighter = require('./lib/highlightCurrent.js')

const languages = {
  de: 'lebenslauf',
  en: 'curriculumVitae'
}

const textUpdater = (textGetter, container) => () => {
  container.classList.add('translating')
  setTimeout(() => {
    container.innerHTML = textGetter(getLang())
    container.classList.remove('translating')
  }, 400)
}

const getLang = GetLang(languages, 'en')

module.exports = (getText) => {
  const langNav = document.querySelector('.nav--lang')
  const main = document.querySelector('main')
  const updateText = textUpdater(getText, main)
  const highlightCurrent = currentNavHighlighter(langNav, 'hash')
  updateText()
  highlightCurrent()
  window.addEventListener('hashchange', updateText)
  window.addEventListener('hashchange', highlightCurrent)
}

