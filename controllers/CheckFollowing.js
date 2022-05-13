const Following = require('../models/Following').Following;

const CheckFollowing = async(req, res) => {
    const { user_id, following } = req.params;
    console.log(`Checking ${user_id}`)
    await Following.findAll({
        where: {
            user_id: user_id,
            following_id: following
        }
    }).then(resp=>res.json(resp))
}

module.exports = {
    CheckFollowing: CheckFollowing
}