/**
 * Asset files for ClayDB
 * @module claydb-assets
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get banner () { return d(require('./banner')) },
  get favicon () { return d(require('./favicon')) },
  get install () { return d(require('./install')) }
}
