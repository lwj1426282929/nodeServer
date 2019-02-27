const blogService = require('../service/blog')

const blogController = {}

// 新增文章
blogController.addBlog = async function (req, res, next) {
  console.log(req.body)
  let article = {}
  let data = await blogService.addBlog(article)
  res.send({
    data
  })
}

// 删除文章
blogController.deleteBlog = async function (req, res, next) {
  let id = 2
  let data = await blogService.deleteBlog(id)
  res.send({
    data
  })
}

// 通过关键字查询文章
blogController.blogList = async function (req, res, next) {
  let title = req.query.title || '';
  let data = await blogService.blogList(title);
  res.send(data)
}

// 通过id查询文章
blogController.getBlogById = async function (req, res, next) {
  let id = 1
  let data = await blogService.getBlogById(id)
  res.send({
    data
  })
}

// 修改文章
blogController.updateBlog = async function (req, res, next) {
  let content = {
    id: 1,
    title: '这是修改数据',
    desc: '123',
    author: '赖维健',
    createTime: new Date(),
    upDateTime: new Date(),
    content: '1234556543643635654'
  }
  let data = await blogService.updateBlog(content)
  res.send({
    data
  })
}

module.exports = blogController;