'use strict'

const { src, dest } = require('gulp')

const configPath = require('../../config-path')

const imagemin = require('gulp-imagemin')
const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant')
const newer = require('gulp-newer')
const plumber = require('gulp-plumber')

const img = (done) => {
  src(`${configPath.dirs.img.src}/**/*`)
    .pipe(plumber())
    .pipe(newer(`${configPath.dirs.img.dist}`))
    .pipe(
      imagemin([
        mozjpeg({ quality: 80 }),
        pngquant(),
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle({ optimizationLevel: 6 }),
      ])
    )
    .pipe(dest(`${configPath.dirs.img.dist}`))
  done()
}

module.exports = img
