const blogService = require('../service/blog')

const blogController = {}

// 新增文章
blogController.addArticle = async function (req, res, next) {
  let content = {
    title: '这是新增数据',
    desc: '123',
    author: '赖维健',
    createTime: new Date(),
    upDateTime: new Date(),
    content: '1234556543643635654'
  }
  let data = await blogService.addArticle(content)
  res.send({
    data
  })
}

// 删除文章
blogController.deleteArticle = async function (req, res, next) {
  let id = 2
  let data = await blogService.deleteArticle(id)
  res.send({
    data
  })
}

// 查询文章列表
blogController.getArticleList = async function (req, res, next) {
  let title = req.query.title;
  let data = await blogService.getList(title);
  res.send({
    data
  })
}

// 通过id查询文章
blogController.getArticleById = async function (req, res, next) {
  let id = 1
  let data = await blogService.getById(id)
  res.send({
    data
  })
}

// 修改文章
blogController.updateArticle = async function (req, res, next) {
  let content = {
    id: 1,
    title: '这是修改数据',
    desc: '123',
    author: '赖维健',
    createTime: new Date(),
    upDateTime: new Date(),
    content: '1234556543643635654'
  }
  let data = await blogService.updateArticle(content)
  res.send({
    data
  })
}

module.exports = blogController;