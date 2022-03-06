'use strict'

const dest = require('gulp')

const configPath = require('../../config-path')
const webpackConfig = require('../../webpack.config.js')

const webpack = require('webpack')
const webpackStream = require('webpack-stream')

const uglify = require('gulp-uglify')

const compileJs = (done) => {
  webpackStream(webpackConfig, webpack)
    .pipe(dest(`${configPath.dirs.js.dist}`))
    .pipe(uglify())
  done()
}

module.exports = compileJs
