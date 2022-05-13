const { Post } = require('../models/Post')

const getPost = async (req, res) => {
    const { id } = req.params;
    await Post.findAll({
        where:{
            owner_id: id
        }
    }).then(post => res.json(post))
}

module.exports = {
    GetPosts: getPost
}