const lebenslauf = require('./lebenslauf.md')
const curriculumVitae = require('./curriculum-vitae.md')
const files = { lebenslauf, curriculumVitae }
module.exports = x => files[x]

