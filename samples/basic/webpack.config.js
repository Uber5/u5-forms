const path = require('path')
module.exports = {
  entry: {
    app: './src'
  },
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets:['es2015', 'react']
        }
      }
    ]
  },
  // resolve: { fallback: path.join(__dirname, "node_modules") },
  // resolveLoader: { fallback: path.join(__dirname, "node_modules") }
}
