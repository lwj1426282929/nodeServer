const express = require('express')
const router = express.Router()
let blogController = require('../controller/blog')

// 新增
router.post('/add', blogController.addBlog)

// 删除
router.delete('/delete', blogController.deleteBlog)

// 列表查询
router.get('/list', blogController.blogList)

// 根据id查询
router.get('/getById', blogController.getBlogById)

// 修改
router.put('/update', blogController.updateBlog)

module.exports = router;