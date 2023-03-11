# README

当需要频繁配置 webpack.config.js 文件时使用，当修改 webpack.config.js 配置文件后，服务会自动 restart（对应 `npm run start` ）

同时也是一个简单的写 vanilla js 的 webpack 模版

- `npm run dev` 用 webpack-dev-server 启一个最简 dev server
- `npm run start` 同时监控 `webpack.config.js` 的修改，自动重启 webpack-dev-server
- `npm run build` 普通打包（仅用于简单 demo，不然最好可以修改下配置里的 `mode`）
- `npm run watch:build` 持续打包（监听文件修改，持续打包）

devServer 中有个配置 `writeToDisk: true`，可以做到即使是在调试过程中（webpack-dev-server），也能有文件打包到 dist

这个时候如果我们不需要内存中的文件的话（有些场景只能用硬盘里的文件），我们也可用 `watch` 选项，用 `npm run watch:build` 命令进行持续打包（详见 ./webpack.watch-build.js）

