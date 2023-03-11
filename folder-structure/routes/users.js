const express = require("express");
const path = require("path");
const { addUser } = require("../models/user");

const route = express.Router();

route.get("/", function (request, response) {
  response.sendFile(path.resolve("views/index.html"));
});

route.post("/add-user", function (req, res) {
  addUser(req.body.fullname, req.body.age).then(() => {
    res.status(201).end("Got the data");
  });
});

module.exports = {
  userRoutes: route,
};
