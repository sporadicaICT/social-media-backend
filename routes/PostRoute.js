const express = require("express");
const PostRouter = express.Router();
const { AddPost } = require("../controllers/AddPost");
const { GetPosts } = require("../controllers/GetPosts");
const { AddLikes } = require("../controllers/AddLikes");
const { DeleteLikes } = require("../controllers/DeleteLikes");
const { AddRepost } = require("../controllers/AddRepost");

PostRouter.post("/addpost", AddPost);
PostRouter.patch("/addlikes", AddLikes);
PostRouter.delete("/deletelikes", DeleteLikes);
PostRouter.post("/addrepost", AddRepost);
PostRouter.get("/:id", GetPosts);

module.exports = {
  PostRouter: PostRouter,
};
