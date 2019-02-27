const mysql = require('mysql')
const service = {}

// 创建连接
let connection = mysql.createConnection({
  host: 'localhost',
  database: 'blog',
  user: 'root',
  password: '123'
});

// 连接
connection.connect();

// 执行sql
service.query = function (sql, rows) {
  return new Promise((resolve, reject) => {
    connection.query(sql, rows, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

module.exports = service