const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    'app-bundle': ["@babel/polyfill", path.resolve(__dirname, 'src', 'index.js')],
  },
  output: {
    filename: 'app-bundle-[hash].js',
    sourceMapFilename: 'app-bundle-[hash].js.map',
    path: path.resolve('./public/bundles/javascripts/'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-react'
            ]
          }
        }
      }
    ],
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'app-bundle.json',
    }),
  ],
}
