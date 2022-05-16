const express = require("express");
const FeedRouter = express.Router();
const GetFeed = require("./FeedRoute/HomePageFeed").GetFeed;
const TopPosts = require("./FeedRoute/SearchPageFeed").TopPosts;

FeedRouter.get("/topfeed", (req, res) => TopPosts(req, res));
FeedRouter.get("/:username", (req, res) => {
  GetFeed(req, res);
});

module.exports = {
  FeedRouter: FeedRouter,
};
