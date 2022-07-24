const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// importing routes
const authRoutes = require('./Routes/AuthRoutes.js')

dotenv.config();

const app = express();

// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// connecting with the db
const CONNECTION = process.env.MONGODB_CONNECTION;

mongoose
  .connect(CONNECTION)
  .then(() => {
    console.log("server connected to the db");
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server connected to ${process.env.PORT}`);
});
