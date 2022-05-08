const express = require('express')
const { getPosts, addPost, editPost, deletePost } = require('../controllers/postControllers')
const router = express.Router()
const Post = require('../models/Post')

// fetch all posts
router.get('/', getPosts)

// Create a post
router.post('/add', addPost)

// Edit a post
router.put('/edit/:id', editPost)


// Delete a post
router.delete('/:id', deletePost)



module.exports = router;