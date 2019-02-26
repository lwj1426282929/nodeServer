const blogService = require('../service/blog')

const blogController = {}

// 列表查询
blogController.getList = async function (req, res, next) {
  let title = req.query.title;
  let data = await blogService.getList(title);
  res.send({
    data
  })
}

// 通过id查询
blogController.getById = async function (req, res, next) {
  res.send({
    success: true
  })
}

module.exports = blogController;