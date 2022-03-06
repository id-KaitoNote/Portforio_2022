const config = {
  path: {
    src: './src',
    dist: './dist',
    base: './dist',
  },
}

const dirs = {
  ejs: {
    src: `${config.path.src}/**/*.ejs`,
    dist: `${config.path.dist}`,
  },
  scss: {
    src: `${config.path.src}/assets/styles/**/*.scss`,
    dist: `${config.path.dist}/assets/css`,
  },
  js: {
    src: `${config.path.src}/assets/scripts/main.js`,
    dist: `${config.path.dist}/assets/js`,
  },
  img: {
    src: `${config.path.src}/assets/images`,
    dist: `${config.path.dist}/assets/images`,
  },
  browserSync: {
    options: {
      server: {
        baseDir: `${config.path.base}`,
      },
      notify: 'false',
      open: 'external',
      reloadOnRestart: true,
    },
  },
  clean: [config.path.dist],
}

config.dirs = dirs
module.exports = config
