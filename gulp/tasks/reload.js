'use strict'

const browserSync = require('browser-sync')

const reload = () => {
  browserSync.reload()
}

module.exports = reload
