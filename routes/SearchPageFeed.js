const Post = require('../models/Post').Post;

const TopPosts = async(req, res) => {
    await Post.findAll({
        order: [['likes','DESC']],
        limit: 231
    })
    .then((response)=>{ res.json(response) })
    .catch(()=>res.json({message:"Could not get posts"}))
}

module.exports = {
    TopPosts: TopPosts
}