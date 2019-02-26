const express = require('express')
const router = express.Router()
let blogController = require('../controller/blog')

// 新增
router.get('/add', blogController.addArticle)

// 删除
router.get('/delete', blogController.deleteArticle)

// 列表查询
router.get('/list', blogController.getArticleList)

// 根据id查询
router.get('/', blogController.getArticleById)

// 修改
router.get('/update', blogController.updateArticle)

module.exports = router;