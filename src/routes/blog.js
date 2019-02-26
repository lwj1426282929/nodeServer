const express = require('express')
const router = express.Router()
let blogController = require('../controller/blog')

// 新增
router.post('/add', (req, res, nnext) => {
})

// 删除
router.delete('/delete', () => {
})

// 列表查询
router.get('/list', blogController.getList)

// 根据id查询
router.get('/', blogController.getById)

// 修改
router.put('/', (req, res, next) => {
})

module.exports = router;