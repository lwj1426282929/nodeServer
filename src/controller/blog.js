const blogService = require('../service/blog')
const moment = require('moment')

const htmlEncode = require('js-htmlencode').htmlEncode;
const htmlDecode = require('js-htmlencode').htmlDecode;

const blogController = {}

// 新增文章
blogController.addBlog = async function (req, res, next) {
  console.log(req.body)
  let article = {}
  let data = await blogService.addBlog(article)
  res.send(data)
}

// 删除文章
blogController.deleteBlog = async function (req, res, next) {
  let id = 2
  let data = await blogService.deleteBlog(id)
  res.send(data)
}

// 通过关键字查询文章
blogController.blogList = async function (req, res, next) {
  let key = req.query.key || ''
  let data = await blogService.blogList(key);
  for (let blog of data) {
    blog.content = htmlDecode(blog.content)
  }
  res.send(data)
}

// 通过id查询文章
blogController.getBlogById = async function (req, res, next) {
  let id = req.query.id
  let [data] = await blogService.getBlogById(id)
  console.log(data)
  data.content = htmlDecode(data.content)
  res.send(data)
}

// 修改文章
blogController.updateBlog = async function (req, res, next) {
  let blog = {
    id: req.body.id,
    title: req.body.title,
    update_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    tag: (req.body.tag || []).toString(),
    content: htmlEncode(req.body.content),
    markdown_content: req.body.markdown_content || ''
  }
  let data = await blogService.updateBlog(blog)
  res.send(data)
}

module.exports = blogController;