const { User } = require('../../models/User');
const bcrypt = require('bcrypt');



const SignIn = async(req, res)=> {
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).json({message:'No username or password provided'})
    } else {
        await User.findOne({
            where: {
                username: username,
                password: password
            }
        }).then(async(user) => {
            res.json(user)
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
            console.log(user.password)
        })
    }
}

module.exports = {
    SignIn: SignIn,
}