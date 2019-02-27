// 引入express
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// 创建http服务
const http = require('http')
const httpServer = http.createServer(app)

// 引入路由列表
const blog = require('./src/routes/blog')

// 监听端口
httpServer.listen(3000, () => {
  console.log('HTTP Server is running at http://localhost:3000')
})

// 挂载路由
app.use('/blog', blog)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

module.exports = app