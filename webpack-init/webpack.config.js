const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        // test: /\.md$/,
        // use: [
        //   {
            // loader: 'replace-loader',
            // 如果是单个 loader，可以在这里指定 loader 位置
            // loader: './loaders/replace-loader'
            // options: {
            //   origin: 'HELLO',
            //   target: 'HI'
            // }
          // },
        // ]
      }
    ]
  },
  devServer: {
    stats: {
      assets: false,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: false,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    },
    host: '0.0.0.0'
  }
}