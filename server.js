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
const { DeleteFollowing } = require("./controllers/DeleteFollowing");
const { UserRouter } = require("./routes/UserRoute");
const { FeedRouter } = require('./routes/Feed');
const { Auth } = require("./routes/Auth");
const { GetUsers } = require("./routes/UserRoute/GetUsers");
const { PostRouter } = require("./routes/PostRoute");

const CheckFollowing = require("./controllers/CheckFollowing").CheckFollowing;

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
// RFC: The next two routes are the same. Should they be merged?
// Or rather, should the entire following/followers be merged into the user object? 
// since it'll mostly be accessed in that context. Hence making this part of the user route.
app.get('/getfollowing/:user_id', (req, res) => { GetFollowing(req, res) });
app.get('/getfollowers/:user_id', (req, res) => {GetFollowers(req, res);});
app.delete('/deletefollowing', (req, res) => { DeleteFollowing(req,res) });
app.get('/checkfollowing/:user_id/:following', (req, res)=> CheckFollowing(req, res));


app.use("/user", UserRouter);
app.get('/getusers/:text', (req, res)=> { GetUsers(req, res) })


app.use("/feed", FeedRouter);
app.use("/post", PostRouter);


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