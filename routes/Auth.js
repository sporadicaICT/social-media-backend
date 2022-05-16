const SignIn = require("./Auth/SignIn").SignIn;
const express = require("express");
const AuthRouter = express.Router();

AuthRouter.post("/sign-in", SignIn);
module.exports = {
  Auth: AuthRouter,
};
