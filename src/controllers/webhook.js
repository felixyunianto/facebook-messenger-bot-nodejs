const { messageWebhook } = require("../helpers/webhook");

module.exports = {
  get: (req, res) => {
    const verify_token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (verify_token === process.env.VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  },
  post: (req, res) => {
    const { body } = req;
    if (body.object === "page") {
      const webhookEvent = body.entry[0].messaging[0];
      if (webhookEvent.postback) {
        messageWebhook({
          user: webhookEvent.sender.id,
          mid: webhookEvent.postback.mid,
          message: webhookEvent.postback.payload,
          timestamp: webhookEvent.timestamp,
        });
      } else {
        messageWebhook({
          user: webhookEvent.sender.id,
          mid: webhookEvent.message.mid,
          message: webhookEvent.message.text,
          timestamp: webhookEvent.timestamp,
        });
      }

      return res.status(200).send("SUCCESS");
    } else {
      return res.sendStatus(403);
    }
  },
};
