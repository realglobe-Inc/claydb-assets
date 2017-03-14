#!/usr/bin/env node

/**
 * Generate asset files
 */
'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const co = require('co')
const { banner, favicon } = require('../lib')
const svgpng = require('svgpng')

const assetDir = `${__dirname}/../assets`

apeTasking.runTasks('asset', [
  () => co(function * () {
    let banners = {
      'images/claydb-banner.png': [ 'claydb', {} ],
      'images/clay-lump-banner.png': [ 'core', { name: 'Clay-Lump' } ],
      'images/clay-resource-banner.png': [ 'core', { name: 'Clay-Resource' } ],
      'images/clay-entity-banner.png': [ 'core', { name: 'Clay-Entity' } ],
      'images/clay-collection-banner.png': [ 'core', { name: 'Clay-Collection' } ],
      'images/clay-id-banner.png': [ 'core', { name: 'Clay-ID' } ]
    }
    for (let filename of Object.keys(banners)) {
      let [ type, config ] = banners[ filename ]
      yield banner(type, `${assetDir}/${filename}`, config)
    }
  }),
  () => co(function * () {
    let favicons = {
      'images/claydb-favicon.png': [ 'claydb', {} ]
    }
    for (let filename of Object.keys(favicons)) {
      let [ type, config ] = favicons[ filename ]
      yield favicon(type, `${assetDir}/${filename}`, config)
    }
  })
], true)
