# webpack-simple-0

way-0 使用 raw-loader 将 index.html 文件放入 entry.js 中。

使用方式：

```bash
// development
cnpm i 
npm run dev

// production
npm run build
```

可修改文件：

- index.html（css 内联到 index.html 中）
- entry.js（js 也可内联到 index.html 中，也可独立写在 entry.js 中）