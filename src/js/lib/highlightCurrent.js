const updateClass = type => el => {
  if (el.getAttribute('href') === window.location[type]) {
    el.classList.add('active')
  } else {
    el.classList.remove('active')
  }
}

module.exports = (nav, type) => {
  const links = [].slice.call(nav.querySelectorAll('a'))
  return () => links.forEach(updateClass(type))
}

