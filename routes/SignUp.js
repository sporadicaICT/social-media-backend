//package imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.listen(5001);


//const { app } = require('../server');
const { User } = require('../models/User');
const bcrypt = require('bcrypt');

app.post('/sign-up', async(req, res)=> {
    const { name, username, email, password } = req.body;
    let exists;
    await User.findAll({
        where: {
            email: email,
        }
    }).then(users=>{
        users.length === 0 ? exists = false: exists = true;
    })
    if(!name || !email || !password) {
        return res.status(400)
    } else if(exists===true){
        return res.status(409).json({ message: "Email already in use "})
    } else {
        await User.create({
            name: name,
            email: email,
            username: username,
            password: password,//bcrypt.hashSync(password, bcrypt.genSaltSync(5)),
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .then(user => {
            res.json(user);
            console.log(user);
        })
    }
})
