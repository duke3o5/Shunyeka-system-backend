const express = require("express");
const { userModel } = require("../Models/user.model");
const updateUserRouter = express.Router();

updateUserRouter.put("/update/:id", async (req, res) => {
  try {
    const Id = req.params.id;
    // console.log(payload);
    const new_user = await userModel.findByIdAndUpdate({ "_id": Id },req.body);
    res.status(200).send({ msg: "user updated", user: new_user });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = { updateUserRouter };
