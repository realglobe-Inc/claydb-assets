
'use strict'

const { join, resolve } = require('path')
let image = (filename) => join(resolve(__dirname, '../assets/images'), filename)

/** Image paths */
exports.images = {
  nodejsBanner: image('nodejs-banner.png'),
  npmBanner: image('npm-banner.png')
}
