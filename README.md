# jsj

## step - 0

```bash
git clone git@github.com:lessfish/jsj.git
```

## step - 1

open file `cli.js`, edit this line:

```js 
// your local repo path here
let basePath = '/Users/fish/github/jsj/'
```

change the `basePath` according to the position of your cloned repo

## step - 2

`cd` to the cloned repo in the command line, and then run:

```bash 
npm install
npm link 
```


## step - 3

如果输入 `<projectName>` 参数，可创建文件夹并 init，如果没有，则直接在当前文件夹中 init

```bash
jsj cra <projectName>
jsj cra-ts <projectName>
jsj cra-router <projectName>
jsj cra-multi-router <projectName>

~~jsj gulp-simple <projectName>~~（deprecated）
~~jsj gulp <projectName>~~（deprecated）
~~jsj webpack-simple <projectName>~~（deprecated）
~~jsj webpack <projectName>~~（deprecated）
jsj webpack-init <projectName>（当需要配置 webpack.config.js 文件中多处地方时使用）
```
