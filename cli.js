#!/usr/bin/env node

// your local repo address here
let basePath = '/Users/fish/github/jsj/'

const fs = require('fs-extra')
const path = require('path')

let jsjType= process.argv[2]
let projectName = process.argv[3]

let destPath = path.join(process.cwd(), projectName)
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