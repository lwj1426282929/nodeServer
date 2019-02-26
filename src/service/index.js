const mysql = require('mysql')
const service = {}

// 创建连接
let connection = mysql.createConnection({
  host: 'localhost',
  database: 'blog',
  user: 'root',
  password: '123'
});

connection.connect();

service.query = function (sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

module.exports = service