const getAllTextNodes = el => {
  const [textNodes, otherNodes] =
    Array.from(el.childNodes)
      .reduce((m, el) => {
        window.Text.prototype.isPrototypeOf(el)
          ? m[0].push(el)
          : m[1].push(el)
        return m
      }, [[], []])
  return textNodes.concat(...otherNodes.map(getAllTextNodes))
}

const decimateTextNode = i => text => {
  const initialContent = text.wholeText
  if (initialContent.length === 1) return

  const intId = window.setInterval(() => {
    const parent = text.parentNode
    const textContent = text.wholeText
    if (
      text.length < 1 ||
      (text.length === 1 && textContent === ' ') ||
      !parent
    ) {
      return window.clearInterval(intId)
    }
    const nextNode = text.nextSibling

    parent.removeChild(text)
    const newText = textContent.length < 2
      ? document.createTextNode(' ')
      : document.createTextNode(textContent.substr(1))
    if (nextNode) {
      parent.insertBefore(newText, nextNode)
    } else {
      parent.appendChild(newText)
    }
    text = newText
  }, i / (initialContent.length + 1))
}

const decimate = (i, el) => {
  const textNodes = getAllTextNodes(el)
  textNodes.forEach(decimateTextNode(i))
  return textNodes
}

module.exports = (textGetter, container) => () => {
  const timeout = 1000
  const textNodes = decimate(timeout, container)
  setTimeout(() => {
    container.innerHTML = textGetter()
  }, textNodes.length < 1 ? 0 : timeout)
}

