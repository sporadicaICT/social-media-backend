const { Comments } = require('../../models/Comments')

const DeleteComment = async(req, res) => {
    const { id, postid } = req.params;

    await Comments.findbyPk(id)
    .then(() => res.status(200).json({message:'Comment has been deleted'}))
    .catch(() => res.status(500).json({ message: 'Could not delete comment'}))
}   

module.exports = {
    DeleteComment: DeleteComment
}