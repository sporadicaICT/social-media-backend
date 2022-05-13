const { Op } = require('sequelize')
const Post = require('../models/Post').Post;
const Following = require('../models/Following').Following;

const Feed = async(req, res) => {
    const { username } = req.params;
    await Following.findAll({
        attributes: ['following_id']
    })
    .then(async(resp)=>{
        let values = []
        resp.map((i)=>{
            values.push(i.following_id)
        })
        console.log(values)
        await Post.findAll({
            where: {
                [Op.or]: [
                    {
                        owner_id: {
                            [Op.or]: [username,values]
                        }
                    },
                    {
                        reposted_by: {
                            [Op.or]: [username,values]
                        }
                    }
                ]
            },
            order: [['createdAt', 'DESC']]
        })
        .then((response)=>{
            response.map((i)=>{
            })
            res.json(response)
        })
        .catch(()=>res.json({message:"Error getting feed"}))
    })
}

module.exports = {
    GetFeed: Feed
}