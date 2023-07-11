const express = require("express");
const { userModel } = require("../Models/user.model");
const getAllUserRouter = express.Router();

getAllUserRouter.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
    // console.log(users)
  } catch (err) {
    res.status(400).send({ msg: err.message });
    // console.log(err.message )
  }
});

module.exports = { getAllUserRouter };
