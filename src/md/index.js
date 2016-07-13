const lebenslauf = require('./lebenslauf.md')
const files = { lebenslauf }
module.exports = x => files[x]

