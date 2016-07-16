type LocationType = 'hash' | 'href'

const updateClass = (type : LocationType) => (el : HTMLElement) : HTMLElement => {
  if (el.getAttribute('href') === <string>(<any>window.location)[type]) {
    el.classList.add('active')
  } else {
    el.classList.remove('active')
  }
  return el
}

export = (nav : Element, type : LocationType) : () => Array<Element> => {
  const links = [].slice.call(nav.querySelectorAll('a'))
  return () => links.map(updateClass(type))
}

