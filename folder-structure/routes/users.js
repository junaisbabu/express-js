const express = require("express");
const path = require("path");
// const { addUser } = require("../models/user_old");
// require("../models/connection");

const route = express.Router();

route.get("/", function (request, response) {
  // response.set("Keep-Alive", "timeout=10") //! this one already existed in header

  //! creating own header -> if you are going to create your own header then you have start with `X` for identifying custom header
  response
    .set("X-My-Own-Header", "junais")
    .sendFile(path.resolve("views/index.html"));

  //! this will give you the 'Accept' header (you can get everything in Headers)
  console.log(request.get("Accept"));
});

route.post("/add-user", function (req, res) {
  addUser(req.body.fullname, req.body.age).then(() => {
    res.status(201).end("Got the data");
  });
});

module.exports = {
  userRoutes: route,
};
