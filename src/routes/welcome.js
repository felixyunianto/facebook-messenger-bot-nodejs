const welcomeRoute = require("express").Router();

welcomeRoute.get("/", (req, res) => {
  res.send({
    message: "Welcome to my chatbot",
    author: "Felix Yunianto Gunawan",
  });
});


module.exports = welcomeRoute;