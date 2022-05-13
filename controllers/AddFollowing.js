const model = require('../models/Following');
const User = require('../models/User').User;

const AddFollower = async(req, res) => {
    const { user_id, following_id } = req.body;
    let count = 0;
    if(!user_id || !following_id) {
        return res.status(404).json({ message: "There was an error"})
    } else {
        await model.Following.create({
            user_id: user_id,
            following_id: following_id,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .then(async()=>{
            await model.Following.count({
                where:{
                    user_id: user_id
                }
            }).then(resp=>{
                console.log(resp)
                count = resp
            })
        })
        .then(async()=>{
            await User.update({
                following: count,
            },{
                where: {
                    username: user_id
                }
            })
            .then(resp=>res.json({message:"Sucessfully followed"}))
        })
    }
}

module.exports = {
    AddFollowing: AddFollower,
}