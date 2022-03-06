'use strict'

const configPath = require('../../config-path')

const browserSync = require('browser-sync')

const sync = (done) => {
  browserSync.init(configPath.dirs.browserSync.options)
  done()
}

module.exports = sync
