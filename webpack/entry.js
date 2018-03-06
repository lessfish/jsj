if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}

console.log('ENV: ' + process.env.NODE_ENV)

import './style.scss'

// 以下开始写自己的 js
// ...