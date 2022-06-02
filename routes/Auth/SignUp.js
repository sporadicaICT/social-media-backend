const { User } = require('../../models/User');
const { Auth } = require('../../models/Auth');
const { makeid } = require('../../functions');
const bcrypt = require('bcrypt');

const checkForExistingAccount = async (body) => {
    const { email } = body;
    const existingUsers = await Auth.count({
        where: {
            email: email
        }
    }).then(number => {
        return number
    })

    if (existingUsers === 0)
        return false
    else 
        return true
}

const SignUp = async (req, res) => {
    const { name, username, email, password } = req.body;
    const accountExists = await checkForExistingAccount(req.body).then(number => { return number })
    
    
    if(!name || !email || !password) {
        return res.status(400).json({ code: 'Invalid entry/entries' })
    } 
    else if (!accountExists) {
        const randomId = makeid(20);

        const auth = await Auth.create({
            email: email,
            username: username,
            user_id: randomId,
            password: password,
            createdAt: new Date(),
            updatedAt: new Date(),
        }).then(auth => {
            return auth
        })

        const user = await User.create({
            id: randomId,
            name: name,
            email: email,
            username: username,
            password: password,//bcrypt.hashSync(password, bcrypt.genSaltSync(5)),
            createdAt: new Date(),
            updatedAt: new Date(),
        }).then(user => {
            return user
        })


        Promise.all([auth, user]).then(details => {
            res.send(details)
        }) 
    }
    else {
        res.json({ code: 'Email already in use!' })
    }
    
    
}

module.exports = {
    SignUp: SignUp
}
