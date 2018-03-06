if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}

console.log('ENV: ' + process.env.NODE_ENV)