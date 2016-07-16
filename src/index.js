require('./pug')
require('./css')
const mdLoader = require('./md/index.ts')
require('./ts/index.ts')(mdLoader)

