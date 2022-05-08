const Post = require('../models/Post')

const getPosts = async (req, res) => {
    try {
        await Post.sync()
        const posts = await Post.findAll()

        res.status(200).json(posts)
    } catch (error) {
        console.error(error.message)
        res.status(404)
    }   
}

const addPost = async (req, res) => {
    try {
        let { title, name, description, subject, location, number, visit, vaccines } = req.body;
        await Post.create({
            title,
            name,
            description,
            subject,
            location,
            number,
            visit,
            vaccines 
        })

        res.status(201).json('Successfully created a post')
    } catch(error) {
        console.error(error.message)
        res.status(400)
    }
}

const editPost = async (req, res) => {
    try {
        const { id } = req.params;
        let { title, name, description, subject, location, number, visit, vaccines } = req.body;

        await Post.update({
            title,
            name,
            description,
            subject,
            location,
            number,
            visit,
            vaccines 
        }, {
            where: {
                id
            }
        })

        res.status(200).json('Post was successfully edited')
    } catch(error) {
        console.error(error.message)
        res.status(400)
    }
}

// Delete a post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await Post.destroy({
            where: {
                id
            }
        })
        res.status(200).json('Successfully deleted')
    } catch(error) {
        console.error(error.message)
        res.status(400)
    }
}


module.exports = {
    getPosts,
    addPost,
    editPost,
    deletePost
}