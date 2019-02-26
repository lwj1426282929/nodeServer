const service = require('./index')

const blogService = {}

blogService.getList = function (title) {
  let sql = `SELECT * FROM article WHERE  title LIKE '%${title}%'`;
  return service.query(sql)
}

module.exports = blogService