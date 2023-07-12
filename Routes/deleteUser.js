const express = require("express");
const { userModel } = require("../Models/user.model");
const deleteUserRouter = express.Router();

deleteUserRouter.delete("/users/:id", async (req, res) => {
  try {
    const Id = req.params.id;
    // console.log(payload);
    const new_user = await userModel.findByIdAndDelete({ "_id": Id });
    res.status(200).send({ msg: "user has been removed successfully" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = { deleteUserRouter };
