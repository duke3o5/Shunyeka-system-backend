const express = require("express");
const { userModel } = require("../Models/user.model");
const addUserRouter = express.Router();

addUserRouter.post("/add", async (req, res) => {
    try {
      const payload = req.body;
      // console.log(payload);
      const new_user = new userModel(payload);
      await new_user.save();
      res.status(200).send({ msg: "A new user has been added" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });

  module.exports={addUserRouter}