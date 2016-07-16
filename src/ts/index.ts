/// <reference path="./lib/Language.ts" />

import langGetter = require('./lib/langGetter.ts')
import currentNavHighlighter = require('./lib/currentNavHighlighter.ts')
import textUpdater = require('./lib/textUpdater.ts')

export = (getText : (name : string) => string) => {
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

