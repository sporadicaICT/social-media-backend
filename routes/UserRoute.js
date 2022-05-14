const express = require("express");
const UserRouter = express.Router();
const GetUser = require("./UserRoute/GetUser");


// Define this last to avoid clashes on the /user path: https://stackoverflow.com/q/11258442/16071410 
UserRouter.get("/:id", (req, res) => {
  GetUser(req, res);
});

module.exports = {
  UserRouter: UserRouter,
};
