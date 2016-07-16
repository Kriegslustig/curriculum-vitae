require('./textUpdater.css')

const setTranslate = (element : HTMLElement, factor : number) => {
  const containerWidth = element.clientWidth
  element.style.transform = `
    translateX(${containerWidth / 3 * (factor * -1)}px)
    translateX(${containerWidth / 1.65 * factor}px)
    rotateY(${90 * factor}deg)
    translateX(${containerWidth / 1.65 * factor}px)`
}

export default (textGetter : () => string, container : Element) :
  (initial? : boolean | Event) => void => {
    const timeout = 1000
    let lock = false
    let foreground = document.createElement('div')
    let background = document.createElement('div')
    container.classList.add('textupdater')
    foreground.classList.add('textupdater__plate')
    background.classList.add('textupdater__plate')
    container.appendChild(foreground)
    container.appendChild(background)
    const update = (text? : string) => (initial : boolean) => {
      if (lock) return setTimeout(update(textGetter()), 100)
      lock = true
      background.innerHTML = text || textGetter()
      background.classList.remove('textupdater__plate--background')
      background.classList.add('textupdater__plate--foreground')
      foreground.classList.remove('textupdater__plate--foreground')
      foreground.classList.add('textupdater__plate--disappearing')
      setTranslate(foreground, -1)
      setTranslate(background, 0)
      setTimeout(() => {
        foreground.classList.remove('textupdater__plate--disappearing')
        foreground.classList.add('textupdater__plate--background')
        setTranslate(foreground, 1)
        foreground.innerHTML = ''
        ; [background, foreground] = [foreground, background]
        lock = false
      }, initial === true ? 0 : timeout)
    }
    return update()
  }


