export default () : string | void => {
  const hash = window.location.hash.substr(1)
  if (hash.length > 0) return hash
}

