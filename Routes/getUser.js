const express = require("express");
const { userModel } = require("../Models/user.model");
const getUserRouter = express.Router();

getUserRouter.get("/:id", async (req, res) => {
    let Id=req.params.id
  try {
    const user = await userModel.findOne({"_id":Id});
    res.status(200).send(user);
    // console.log(users)
  } catch (err) {
    res.status(400).send({ msg: err.message });
    // console.log(err.message )
  }
});

module.exports = { getUserRouter };
