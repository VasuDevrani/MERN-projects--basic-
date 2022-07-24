const express = require('express')
const UserModel = require('../Models/AuthModel')
const bcrypt = require('bcrypt');

const registerUser = async(req, res) => {
    console.log(req.body, req.method)

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass
    const newUser = new UserModel(req.body);
    // const {username} = req.body
    try {
    //   // addition new
    //   const oldUser = await UserModel.findOne({ username });
  
    //   if (oldUser)
    //     return res.status(400).json({ message: "User already exists" });
  
      // changed
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

const loginUser = async(req, res) => {
    console.log(req.body, req.method)

    const { username, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ username: username });
  
      if (user) {
        const validity = await bcrypt.compare(password, user.password);
        // console.log(user);
  
        if (!validity) {
          res.status(400).json("wrong password");
        } else {
          console.log(user);
          res.status(200).json(user);
        }
      } else {
        res.status(404).json("User not found");
      }
    } catch (err) {
      res.status(500).json(err);
    }
}

module.exports = ({registerUser, loginUser})