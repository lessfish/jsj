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
    open: true,
    // dev server 调试过程中，也能自动生成 dist 文件
    // writeToDisk: true,
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
    // 配置后可以通过 local ip + 端口 打开
    host: '0.0.0.0',
    // 可以在 hosts 里配置，然后通过 hosts 里配置的 域名+端口 打开
    disableHostCheck: true,
  }
}