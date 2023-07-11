const express = require("express");
const cors=require("cors");
const { connection } = require("./Config/db");
const { addUserRouter } = require("./Routes/addUser");
const { getAllUserRouter } = require("./Routes/getAllUser");
const { deleteUserRouter } = require("./Routes/deleteUser");
const { getUserRouter } = require("./Routes/getUser");
const { updateUserRouter } = require("./Routes/updateUser");

const app = express();
app.use(cors());

app.use(express.json());
require("dotenv").config();

app.use("/shunyeka",addUserRouter);
app.use("/shunyeka", getAllUserRouter);
app.use("/shunyeka", deleteUserRouter);
app.use("/shunyeka", getUserRouter);
app.use("/shunyeka", updateUserRouter);



app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("connected to atlas database");
    } catch (er) {
      console.log(er);
    }
  
    console.log("server is running on Port", process.env.PORT);
  });