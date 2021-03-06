const blogService = require('../service/blog')
const moment = require('moment')
const htmlEncode = require('js-htmlencode').htmlEncode
const htmlDecode = require('js-htmlencode').htmlDecode

const blogController = {}

// 新增文章
blogController.addBlog = async function (req, res, next) {
  let blog = {
    title: req.body.title,
    tag: req.body.tag.toString(),
    author: req.body.author,
    create_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    update_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    content: htmlEncode(req.body.content),
    blog_type: req.body.blog_type,
    markdown_content: req.body.markdown_content
  }
  await blogService.addBlog(blog)
  res.send({
    success: true
  })
}

// 删除文章
blogController.deleteBlog = async function (req, res, next) {
  let id = req.body.id
  await blogService.deleteBlog(id)
  res.send({
    success: true
  })
}

// 通过关键字查询文章
blogController.blogList = async function (req, res, next) {
  let key = req.query.key || ''
  let data = await blogService.blogList(key);
  for (let blog of data) {
    blog.content = htmlDecode(blog.content)
    blog.tag = blog.tag ? blog.tag.split(',') : []
  }
  res.send({
    success: true,
    data
  })
}

// 通过id查询文章
blogController.getBlogById = async function (req, res, next) {
  let id = req.query.id
  let [data] = await blogService.getBlogById(id)
  if (data) {
    data.content = htmlDecode(data.content)
    data.tag = data.tag.split(',')
    res.send({
      success: true,
      data
    })
  } else {
    res.send({
      success: false,
      message: '您所查找的文章不存在！'
    })
  }
}

// 修改文章
blogController.updateBlog = async function (req, res, next) {
  let blog = {
    id: req.body.id,
    title: req.body.title,
    update_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    tag: req.body.tag.toString(),
    content: htmlEncode(req.body.content),
    markdown_content: req.body.markdown_content || ''
  }
  await blogService.updateBlog(blog)
  res.send({
    success: true
  })
}

module.exports = blogController;