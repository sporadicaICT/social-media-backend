const { Post } = require('../models/Post')
const { io } = require('../server')

const addRepost = async (req, res) => {
    const { message, owner, image, reposted_by } = req.body;
    if (!message) {
        res.status(404)
        res.json({ message: 'Invalid post message'})
    } else {
        await Post.create({
            content: message,
            owner_id: owner,
            image: image,
            is_repost: 1,
            reposted_by: reposted_by

        })
        .then((post)=>{
            res.json(post)
            io.on('connection', (socket)=>{
                socket.on('repost', (repost)=>{
                    
                })
            })
        })
        .then(async()=>{
            await Post.increment('reposts',{
                where: { 
                    owner_id: owner_id
                }
            })
            .then(()=>res.json({message:"Added Repost"}))
        })
        .catch(()=>res.json({message:"Oops....could not add repost"}))
    }
}

module.exports = {
    AddRepost: addRepost
}