const service = require('./index')

const blogService = {}

// 新增文章
blogService.addBlog = (content) => {
  let sql = `INSERT INTO article SET  ?`
  return service.query(sql, [content])
}

// 删除文章
blogService.deleteBlog = (id) => {
  let sql = `DELETE FROM article WHERE id = '${ id }'`
  return service.query(sql)
}

// 通过关键字查找文章
blogService.blogList = (key) => {
  let sql = `SELECT ID id,
            TITLE title,
            AUTHOR author,
            TAG tag,
            CREATE_TIME create_time,
            UPDATE_TIME update_time,
            CONTENT content,
            BLOG_TYPE blog_type,
            MARKDOWN_CONTENT markdown_content 
            FROM article WHERE  
            title LIKE '%${ key }%' OR
            content LIKE '%${ key }%'`;
  return service.query(sql)
}

// 根据id查找文章
blogService.getBlogById = (id) => {
  let sql = `SeLECT ID id,
            TITLE title,
            TAG tag,
            AUTHOR author,
            CREATE_TIME create_time,
            UPDATE_TIME update_time,
            CONTENT content,
            BLOG_TYPE blog_type,
            MARKDOWN_CONTENT markdown_content
            FROM article WHERE
            id = '${ id }'`;
  return service.query(sql)
}

// 修改文章
blogService.updateBlog = (blog) => {
  let sql = `UPDATE article SET
            title = ?,
            update_time = ?, 
            tag = ?,
            content = ?,
            markdown_content = ? 
            where id = ?`
  return service.query(sql, [blog.title, blog.update_time, blog.tag, blog.content, blog.markdown_content, blog.id])
}

module.exports = blogService