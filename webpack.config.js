const path = require('path')
const configPath = require('./config-path')

module.exports = {
  mode: 'production',
  entry: './src/assets/scripts/main.js',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, `${configPath.dirs.js.dist}`),
  },
}
