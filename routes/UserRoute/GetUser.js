const Users = require('../../models/User').User;

const GetUser = async(req, res) => {
    const { id } = req.params;
    
    if(!req.params){
        return res.json({ message: 'Try searching'})
    } else {
        return await Users.findOne({
            attributes: {
                exclude: ['password']
            },
            where: {
                username: id
            },
        })
        .then(users => {
            users.avatar = undefined;
            res.json(users)
        })

    }

}

module.exports = {
    GetUser: GetUser,
}