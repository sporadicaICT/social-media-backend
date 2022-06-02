const SignIn = require("./Auth/SignIn").SignIn;
const SignUp = require('./Auth/SignUp').SignUp; 

const express = require("express");
const { body } = require('express-validator');

const AuthRouter = express.Router();

AuthRouter.get('/', (req, res)=> res.send("<h1>In Auth</h1>"))

AuthRouter.post("/sign-in",[
  body('email').trim().isEmail(),
  body('password').isLength({ min:5 })
], (req, res) =>  SignIn(req, res) );

AuthRouter.post("/sign-up", [
  body('email').trim().isEmail(),
  body('password').isLength({ min:5 }),
  body('username').trim().isLength({ min:5 })

], (req, res) =>  SignUp(req, res) )

module.exports = {
  Auth: AuthRouter,
};
