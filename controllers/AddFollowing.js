const model = require('../models/Following');
const User = require('../models/User').User;

const checkFollowingExists = async ({ body }) => {
    const { Following } = model;
    const { user_id, following } = body;
    const exists = await Following.count({
        where: {
            user_id: user_id,
            following: following
        }
    }).then((record) => {
        if(record === 0)
            return false;
        else
            return true;
    })

    return exists;
}

const AddFollower = async(req, res) => {
    const { user_id, following } = req.body;
    const doesExist = await checkFollowingExists(req).then(data => { return data })

    if(!user_id || !following) {
        return res.status(400).json({ message: "There was an error. Bad Request from client." })
    }
    else if(doesExist) {
        return res.status(200).json({ message: "Record already exists", exists: true })
    } 
    else {
        await model.Following.create({
            user_id: user_id,
            following: following,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .then(async()=>{
            //This promise when resolved, increase the number of followers a user has when someone follows him
            const increaseFollowers = await User.increment('followers', { by:1, 
                where: {
                    id: following
                }
            })

            //This promise when resolved, increases the number of users a certain user follows
            const increaseFollowing =  await User.increment('following',{ by: 1,
                where: {
                    id: user_id
                }
               
            })

            Promise.all([increaseFollowers, increaseFollowing])
            .then(resp => res.status(200).json({message:"Sucessfully followed"} ))
            .catch(err => res.status(500).json({ message: "We may have run into a problem. Try again later." }))
        })
    }
}

module.exports = {
    AddFollowing: AddFollower,
}