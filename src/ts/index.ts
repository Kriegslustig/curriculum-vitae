/// <reference path="./lib/Language.ts" />

import langGetter from './lib/langGetter.ts'
import currentNavHighlighter from './lib/currentNavHighlighter.ts'
import textUpdater from './lib/textUpdater.ts'
import navUpdater from './lib/navUpdater.ts'

export default (getText : (name : string) => string) => {
  const translations : Language.Translation = {
    de: getText('lebenslauf'),
    en: getText('curriculumVitae')
  }

  const getLang = langGetter(translations, 'en')
  const langNav = document.querySelector('.nav--lang')
  const main = document.querySelector('main')
  const pdfLink = document.querySelector('.pdf-link')

  const updateText = textUpdater(() => getLang(), main)
  const highlightCurrent = currentNavHighlighter(langNav, 'hash')
  const updateNav = navUpdater(pdfLink)

  updateText(true)
  highlightCurrent()
  updateNav()
  window.addEventListener('hashchange', updateText)
  window.addEventListener('hashchange', highlightCurrent)
  window.addEventListener('hashchange', updateNav)
}

