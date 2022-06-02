const { User } = require('../../models/User');
const { Auth } = require('../../models/Auth')
const bcrypt = require('bcrypt');

const getUserDetails = async (res, id) => {
    const userDetails = await User.findOne({
        where: {
            id: id
        }
    }).then(user => {
        return res.json(user)
    })

    return userDetails
}

const SignIn = async(req, res)=> {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({message:'No username or password provided'})
    } else {
        await Auth.findOne({
            where: {
                email: email,
                password: password
            }
        }).then(auth => {
            console.log(auth.dataValues)
            getUserDetails(res, auth.dataValues.user_id)
        })
        
            /*
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.status(404)
                    res.json({ message: 'User does not exsist'})
                } else if(result){
                    res.json(user)
                    console.log(result)
                    console.log(user)
                } else {
                    res.send("Wahala dey o")
                }
            })*/
        
    }
}

module.exports = {
    SignIn: SignIn,
}