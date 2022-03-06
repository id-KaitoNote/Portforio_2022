'use strict'

const configPath = require('../../config-path')

const del = require('del')

const clean = () => {
  return del(`${configPath.dirs.clean}`)
}

module.exports = clean
