# webpack-simple 

webpack-simple 的功能和 gulp-simple 一样，都只有一个 index.html 文件，index.html 文件内联 js（也可外联） 和 css，一旦修改，文件刷新。难度在于如何监听到 html 文件。

- way-0（raw-loader）
- way-1（配置 devServer）