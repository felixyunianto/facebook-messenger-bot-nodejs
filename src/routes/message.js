const messageRoute = require("express").Router();
const messageController = require("../controllers/message");

messageRoute.get("/", messageController.get);
messageRoute.get("/:id", messageController.getById);

module.exports = messageRoute;
