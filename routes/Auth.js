const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const SignIn = require("./SignIn").SignIn;
const SignUp = require("./SignUp").SignUp;
const express = require("express");
const AuthRouter = express.Router();

AuthRouter.post("/sign-up", SignUp);
AuthRouter.post("/sign-in", SignIn);
module.exports = {
  Auth: AuthRouter,
};
