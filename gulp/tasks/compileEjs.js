'use strict'

const { src, dest } = require('gulp')

const configPath = require('../../config-path')

const ejs = require('gulp-ejs')
const htmlbeautify = require("gulp-html-beautify")
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')

const compileEjs = (done) => {
  src(`${configPath.dirs.ejs.src}`)
    .pipe(plumber())
    .pipe(ejs())
    .pipe(htmlbeautify({
      "indent_size": 2,
      "indent_char": " ",
      "max_preserve_newlines": 0,
      "preserve_newlines": false,
      "extra_liners": [],
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(dest(`${configPath.dirs.ejs.dist}`))
  done()
}

module.exports = compileEjs
