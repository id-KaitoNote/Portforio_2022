'use strict'

const { src, dest } = require('gulp')

const configPath = require('../../config-path')

const sass = require('gulp-dart-sass')
const sassGlob = require('gulp-sass-glob-use-forward')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const mqpacker = require('css-mqpacker')
const cssDeclarationSorter = require('css-declaration-sorter')

const compileScss = (done) => {
  const plugins = [
    autoprefixer({ grid: true }),
    mqpacker(),
    cssnano({ autoprefixer: false }),
    cssDeclarationSorter({ order: 'smacss' }),
  ]

  src(`${configPath.dirs.scss.src}`, { sourcemaps: true })
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(dest(`${configPath.dirs.scss.dist}`, { sourcemaps: './maps' }))
  done()
}

module.exports = compileScss
