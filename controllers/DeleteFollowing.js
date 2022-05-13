const model = require('../models/Following');
const User = require('../models/User').User;

const DeleteFollowing = async(req, res) => {
    const { user_id, following_id } = req.body;
    let count = 0;
    if(!following_id){
        return res.status(404).json({message: "Could not retreive followers "})
    } else {
        await model.Following.destroy({
            where: {
                user_id: user_id,
                following_id: following_id
            }
        })
        .then(async()=>{
            await model.Following.count({
                where:{
                    user_id: user_id
                }
            }).then(async(resp)=>{
                console.log(resp)
                await User.update({
                    following: resp,
                },{
                    where: {
                        username: user_id
                    }
                })
                .then(()=>res.json({message:"Sucessfully unfollowed"}))
            })
        })
        .catch(() => { res.json({message: "Could not unfollow"})})
    }
}

module.exports = {
    DeleteFollowing: DeleteFollowing,
}