/// <reference path="./Language.ts" />

import getHash from './getHash.ts'

const prefix = './'
const links : Language.Translation = {
  de: 'lebenslauf.pdf',
  en: 'curriculum-vitae.pdf'
}

export default (link : Element) => () => {
  const lang = <Language.Language>getHash()
  link.setAttribute('href', prefix + links[lang])
}

