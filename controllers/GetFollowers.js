const model = require('../models/Following');

const GetFollowers = async(req, res) => {
    const { user_id } = req.body;

    if(false){
        return res.status(404).json({message: "Could not retreive followers "})
    } else {
        const followers = await model.Following.findAndCountAll({
            where: {
                following_id: user_id
            }
        }).then((result) => { console.log(result)})
    }
}

module.exports = {
    GetFollowers: GetFollowers,
}