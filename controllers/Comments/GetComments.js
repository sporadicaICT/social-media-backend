const { Comments } = require('../../models/Comments');

const GetComments = async (req, res) => {
    //limit is an optional param
    const { limit } = req.body;
    const { postid } = req.params;

    if(!postid){
        res.status(400).json({ code: 'Bad request! No postid specified' })
    } 
    else {
        await Comments.findAndCountAll({
            where: {
                post_id: postid
            },
            limit: limit !== undefined ? limit : null
        })
        .then(comments => res.status(200).json(comments))
        .catch(() => {
            res.status(500).json({code: 'Error while getting comments'})
        })
    }

}


module.exports = {
    GetComments: GetComments
}