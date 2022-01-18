const webhookRouter = require("express").Router();
const webhookController = require("../controllers/webhook");

webhookRouter.get("/", webhookController.get);
webhookRouter.post("/", webhookController.post);

module.exports = webhookRouter;
