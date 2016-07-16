/// <reference path="./lib/Language.ts" />

import langGetter from './lib/langGetter.ts'
import currentNavHighlighter from './lib/currentNavHighlighter.ts'
import textUpdater from './lib/textUpdater.ts'

export default (getText : (name : string) => string) => {
  const translations : Language.Translation = {
    de: getText('lebenslauf'),
    en: getText('curriculumVitae')
  }

  const getLang = langGetter(translations, 'en')
  const langNav = document.querySelector('.nav--lang')
  const main = document.querySelector('main')

  const updateText = textUpdater(() => getLang(), main)
  const highlightCurrent = currentNavHighlighter(langNav, 'hash')

  updateText(true)
  highlightCurrent()
  window.addEventListener('hashchange', updateText)
  window.addEventListener('hashchange', highlightCurrent)
}

