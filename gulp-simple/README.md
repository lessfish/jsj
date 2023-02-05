# gulp-simple

```bash
npm i # 注意这里用 cnpm 的话有点问题
npm run dev
```

该 demo 就一个 html 文件，可内联 js 和 css。支持热重载，index.html 有修改即重载页面。

可修改文件：

- index.html

---

2023.02.06：

时隔多年重新运行该 demo，发现报错：

> ReferenceError: primordials is not defined

然后找到这个 [issue](https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node-js)，原因是 gulp3.x 版本和高 node 版本不兼容，用了 [第二个高票回答的解决方案](https://stackoverflow.com/a/58394828)

但是也不是完全参照，它说 node v16.14.0 以上，只需要设置 `overrides` 属性，但是我在 v16.18.1 的环境，需要同时设置 `overrides` 和 `preinstall`

另外现在我会直接用 `b='browser-sync start --server --files '\''**'\'` 这样一个 alias 去实现之