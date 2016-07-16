const lebenslauf = require('./lebenslauf.md')
const curriculumVitae = require('./curriculum-vitae.md')
const files = [ ['lebenslauf', lebenslauf], ['curriculumVitae', curriculumVitae] ]
export default (x : string) => <string>files.filter(f => f[0] === x)[0][1]

