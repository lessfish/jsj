#!/usr/bin/env node

// your local repo path here
let basePath = '/Users/bytedance/fish/github/jsj/'

const fs = require('fs-extra')
const path = require('path')

let jsjType = process.argv[2]

// 如果有第三个参数，则作为文件夹名创建文件夹并且 init，如果没有，则在当前文件夹 init
let destPath = process.argv[3] ? path.join(process.cwd(), process.argv[3]) : process.cwd()
let sourcePath = path.join(basePath, jsjType)

if (jsjType === 'webpack-simple') {
  sourcePath = path.join(sourcePath, 'way-0')
}

const filterFunc = (src, dest) => {
  // your logic here
  // it will be copied if return true
  return !src.includes('node_modules')
}

fs.copy(sourcePath, destPath, { filter: filterFunc }, err => {
  if (err) return console.error(err)

  console.log('init success!')
})