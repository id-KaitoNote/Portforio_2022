'use strict'

const { watch } = require('gulp')

const configPath = require('../../config-path')
const reload = require('./reload')
const ejs = require('./compileEjs')
const scss = require('./compileScss')
const js = require('./compileJs')
const img = require('./img')

const watchFiles = () => {
  watch(`${configPath.dirs.ejs.src}`, ejs).on('change', reload)
  watch(`${configPath.dirs.scss.src}`, scss).on('change', reload)
  watch(`${configPath.dirs.js.src}`, js).on('change', reload)
  watch(`${configPath.dirs.img.src}`, img).on('change', reload)
}

module.exports = watchFiles
