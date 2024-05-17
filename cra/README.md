# README

```bash
$ yarn
$ yarn start
```

自带了 Arco 和源力主题，在 `./src/App` 目录下开发

## 支持 CSS Modules

简单用法：（发现在 `cra` 初始化的模版中，只能用 `xx.module.css` 的形式（中间需要加上 `.module`）

```js
// 引入
import styles from "./style.module.css";

// 使用
<Button type="primary" className={styles.bg}>
  click
</Button>;
```

style.module.css：

```css
.bg {
  background-color: red !important;
}
```

css module 使用中的 className [推荐用驼峰](https://github.com/css-modules/css-modules#naming)，但是并不强制

在 css module 中定义的 className，都会被编译成类似一个 uuid 的形式。如果需要覆盖组件库里的样式，需要用 `:global()` 的方式（表示不要编译）

```js
// 引入
import styles from "./style.module.css";

// 使用
<div className={styles["btn-container"]}>
  <Button type="primary">click</Button>
</div>;
```

style.module.css：

```css
.btn-container :global(.arco-btn) {
  background-color: red !important;
}
```

## 支持 SCSS

只需要安装好 `node-sass`（建议优先安装 `sass`）
