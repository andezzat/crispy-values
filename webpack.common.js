const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    __dirname + '/src/client/app.jsx',
    __dirname + '/scss/theme.scss',
  ],
  output: {
    filename: 'app.js',
    path: __dirname + '/public/javascripts',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../stylesheets/styles.css', {
      allChunks: true,
    }),
  ],
}
