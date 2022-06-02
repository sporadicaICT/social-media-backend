const express = require("express");
const PostRouter = express.Router();
const { AddPost } = require("../controllers/AddPost");
const { GetPosts } = require("../controllers/GetPosts");
const { AddLikes } = require("../controllers/AddLikes");
const { DeleteLikes } = require("../controllers/DeleteLikes");
const { AddRepost } = require("../controllers/AddRepost");


const { AddComment } = require('../controllers/Comments/AddComment');
const { GetComments } = require('../controllers/Comments/GetComments');
const { DeleteComments } = require('../controllers/Comments/DeleteComment');

//First route for testing purposes
PostRouter.get('/', (req, res) => res.send("<h1>helooo from post</h1>"))

PostRouter.post("/addpost", AddPost);
PostRouter.patch("/addlikes", AddLikes);
PostRouter.delete("/deletelikes", DeleteLikes);
PostRouter.post("/addrepost", AddRepost);
PostRouter.get("/:id", GetPosts);

//To manage comments on the post
PostRouter.patch('/addcomment', AddComment);
PostRouter.get('/comments', GetComments);
//PostRouter.delete('/deletecomment', DeleteComments)

module.exports = {
  PostRouter: PostRouter,
};
