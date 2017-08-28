// const HTMLWebpackPlugin = require('html-webpack-plugin');
//
// const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

module.exports = {
  entry: __dirname + '/src/client/app.jsx',

  output: {
    filename: 'app.js',
    path: __dirname + '/public/javascripts/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  // plugins: [HTMLWebpackPluginConfig]
};
