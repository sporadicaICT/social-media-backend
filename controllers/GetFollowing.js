const model = require('../models/Following');

const GetFollowing = async(req, res) => {
    const { user_id } = req.params;

    if(!user_id){
        return res.status(404).json({message: "Could not retreive followers "})
    } else {
        await model.Following.findAndCountAll({
            where: {
                user_id: user_id,
            }
        }).then((result) => { 
            res.json(result);
        })
    }
}


module.exports = {
    GetFollowing: GetFollowing,
}