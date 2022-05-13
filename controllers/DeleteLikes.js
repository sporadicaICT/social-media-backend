const Post = require('../models/Post').Post;

const DeleteLikes = async(req, res) =>{
    const { id, owner_id } = req.body;
    await Post.decrement('likes',{
        where: {
            id: id,
            owner_id: owner_id
        }
    })
    .then((response) => res.json(response))
    .catch(()=> res.json({message:"Could not like post"}))}

module.exports = {
    DeleteLikes: DeleteLikes
}