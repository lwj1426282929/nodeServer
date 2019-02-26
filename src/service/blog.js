const service = require('./index')

const blogService = {}

// 新增文章
blogService.addArticle = (content) => {
  let sql = `INSERT INTO article SET  ?`
  return service.query(sql, [content])
}

// 删除文章
blogService.deleteArticle = (id) => {
  let sql = `DELETE FROM article WHERE id = '${ id }'`
  return service.query(sql)
}

// 通过关键字查找文章
blogService.getList = (title) => {
  let sql = `SELECT * FROM article WHERE  title LIKE '%${ title }%'`;
  return service.query(sql)
}

// 根据id查找文章
blogService.getById = (id) => {
  let sql = `SeLECT * FROM article WHERE id = '${ id }'`
  return service.query(sql)
}

// 修改文章
blogService.updateArticle = (content) => {
  let sql = `UPDATE article SET title = '${ content.title }',author = '${ content.author }' WHERE id = '${ content.id }'`
  return service.query(sql)
}

module.exports = blogService