# jsj

## step - 0

```bash
git clone git@github.com:hanzichi/jsj.git 
```

## step - 1

open file `cli.js`, edit this line:

```js 
// your local repo address here
let basePath = '/Users/fish/github/jsj/'
```

change the `basePath` according to the position of your cloned repo


## step - 2

`cd` to the cloned repo in the command line, and then run:

```bash 
npm link 
```


## step - 3

```bash
jsj gulp-simple <projectName>
jsj gulp <projectName>
jsj webpack-simple <projectName>
jsj webpack <projectName>
```