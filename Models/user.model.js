const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number
  },
  {
    versionKey: false,
  }
);
const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
};