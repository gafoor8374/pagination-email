const express = require("express");

const productsController = require("./controller/email.controller");

const app = express();

app.use(express.json());

app.use("/register", productsController);

module.exports = app;