const { Post } = require('../models/Post')

const addPost = async (req, res) => {
    const { message, owner, image } = req.body;
    if (!message) {
        res.status(404)
        res.json({ message: 'Invalid post message'})
    } else {
        await Post.create({
            content: message,
            owner_id: owner,
            image: image

        }).then((post)=>res.json(post))
    }
}

module.exports = {
    AddPost: addPost
}