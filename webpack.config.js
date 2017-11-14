const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./front/rustw.ts",
  output: {
    filename: "rustw.out.js",
    path: path.resolve(__dirname, 'static'),
    libraryTarget: 'var',
    library: 'Rustw'
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './static',
    port: 9000,
    watchContentBase: true,
    historyApiFallback: {
      disableDotRule: true
    },
    proxy: {
      '/static/*': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/static': '' }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'API': JSON.stringify('http://localhost:3000/'),
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
}
