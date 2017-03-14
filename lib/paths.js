
'use strict'

const { join, resolve } = require('path')
let image = (filename) => join(resolve(__dirname, '../assets/images'), filename)

/** Image paths */
exports.images = {
  clayCollectionBanner: image('clay-collection-banner.png'),
  clayEntityBanner: image('clay-entity-banner.png'),
  clayIdBanner: image('clay-id-banner.png'),
  clayLumpBanner: image('clay-lump-banner.png'),
  clayResourceBanner: image('clay-resource-banner.png'),
  claydbBanner: image('claydb-banner.png'),
  claydbFavicon: image('claydb-favicon.png'),
  nodejsBanner: image('nodejs-banner.png'),
  npmBanner: image('npm-banner.png')
}
