const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

//routes
router.get('/',blogController.blog_dashboard);
router.post('/post',blogController.blog_post)
router.delete('/:id',blogController.blog_delete)
router.put('/:id',blogController.blog_put)

module.exports = router;
