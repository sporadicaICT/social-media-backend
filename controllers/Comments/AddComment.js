const { Comments } = require('../../models/Comments');
const { makeid } = require('../../functions');

const AddComment = async (req, res) => {
    const { owner_id, content } = req.body;
    const { postid } = req.params;

    if(!postid || !owner_id || !content){
        res.status(400).json({ code: 'Bad request! Invalid or Empty details specified' })
    } 
    else {
        await Comments.create({
            id: makeid(15),
            post_id: postid,
            content: content,
            owner_id: owner_id,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(comment => res.status(200).json(comment))
        .catch(() => {
            res.status(500).json({code: 'Unable to add comment'})
        })
    }

}

module.exports = {
    AddComment: AddComment
}