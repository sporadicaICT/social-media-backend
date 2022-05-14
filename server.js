//package imports
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Server } = require('socket.io')

//module imports
const { AddFollowing } = require('./controllers/AddFollowing')
const { GetFollowing } = require('./controllers/GetFollowing')
const { GetFollowers } = require('./controllers/GetFollowers')
const { DeleteFollowing } = require('./controllers/DeleteFollowing')
const { AddPost } = require('./controllers/AddPost')
const { GetPosts } = require('./controllers/GetPosts');
const { UserRouter } = require("./routes/UserRoute");

const AddLikes = require('./controllers/AddLikes').AddLikes;
const DeleteLikes = require('./controllers/DeleteLikes').DeleteLikes;


const CheckFollowing = require('./controllers/CheckFollowing').CheckFollowing

const Auth = require("./routes/Auth").Auth;
const GetUsers = require("./routes/UserRoute/GetUsers").GetUsers;
const GetUser = require('./routes/GetUser').GetUser;
const AddRepost = require('./controllers/AddRepost').AddRepost;
const GetFeed = require('./routes/HomePageFeed').GetFeed
const TopPosts = require('./routes/SearchPageFeed').TopPosts

const PORT = process.env.PORT || 4000
const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors: {origin:"*"}
})

app.use(bodyParser.json());
app.use(cors());
server.listen(PORT);

app.use("/auth", Auth);
app.post('/addfollowing', (req, res) => { AddFollowing(req, res) });
app.get('/getfollowing/:user_id', (req, res) => { GetFollowing(req, res) });
app.get('/getfollowers', (req, res)=> { GetFollowers(req, res) });
app.delete('/deletefollowing', (req, res) => { DeleteFollowing(req,res) });
app.get('/checkfollowing/:user_id/:following', (req, res)=> CheckFollowing(req, res));

app.post('/addpost', (req, res)=> { AddPost(req, res) });
app.get('/getposts/:id', (req, res)=> { GetPosts(req, res)})

app.use("/user", UserRouter);
app.get('/getusers/:text', (req, res)=> { GetUsers(req, res) })

app.patch('/addlikes', (req, res)=> { AddLikes(req, res) })
app.delete('/deletelikes', (req, res)=> { DeleteLikes(req, res) })

app.post('/addrepost', (req, res)=> { AddRepost(req, res) })

app.get('/feed/:username', (req, res)=> { GetFeed(req, res) })
app.get('/topfeed', (req, res)=> TopPosts(req, res))


//Realtime Chat Service
io.on('connection', (socket)=>{
    socket.on('message', (message)=>{
        io.emit('message', {
            sender_id: socket.id,
            message: message,
        })
    })
})


module.exports = {
    app: app,
    io: io
}