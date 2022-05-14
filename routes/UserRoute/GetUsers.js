const Users = require('../../models/User').User;
const { Op } = require('sequelize');

const GetUsers = async(req, res) => {
    const { text } = req.params;
    
    if(!req.params){
        return res.json({ message: 'Try searching'})
    } 

    await Users.findAll({
        attributes: {
            exclude: ['password']
        },
        where: {
            [Op.or]:{
                username: {
                    [Op.substring]: text
                },
                name: {
                    [Op.substring]: text
                }
            }
        },
        limit: 7,
    })
    .then(users => res.json(users))
}

module.exports = {
    GetUsers: GetUsers,
}