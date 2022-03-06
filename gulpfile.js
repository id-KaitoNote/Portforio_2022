const { series, parallel } = require('gulp')

const ejs = require('./gulp/tasks/compileEjs')
const scss = require('./gulp/tasks/compileScss')
const js = require('./gulp/tasks/compileJs')
const img = require('./gulp/tasks/img')
const server = require('./gulp/tasks/sync')
const clean = require('./gulp/tasks/clean')
const watchFiles = require('./gulp/tasks/watchFiles')

exports.development = series(
  clean,
  parallel(ejs, scss, js, img, watchFiles, server)
)

exports.build = series(clean, parallel(ejs, scss, js, img))
