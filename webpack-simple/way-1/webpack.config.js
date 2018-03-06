module.exports = {
  entry:  __dirname + "/entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: './',
    watchContentBase: true
  }
}