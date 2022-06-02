const { Comments } = require('../../models/Comments');

const GetComments = async (req, res) => {
    //limit is an optional param
    const { post_id, limit } = req.body;

    await Comments.findAndCountAll({
        where: {
            post_id: post_id
        },
        limit: limit !== undefined ? limit : null
    })
    .then(res => res.json(res))
    .catch(() => {
        res.status(401).json({code: 'Error while getting comments'})
    })
}


module.exports = {
    GetComments: GetComments
}