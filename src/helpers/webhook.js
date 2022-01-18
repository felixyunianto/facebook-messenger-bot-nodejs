const request = require("request");
const {
  FIRST_NAME,
  BITRHDAY,
  RANGE_BIRTHDAY,
  WRONG_DATE,
  POSITIVE_BUTTON,
  NEGATIVE_BUTTON,
  GOODBYE,
} = require("../constants/webhook");
const userController = require("../controllers/user");
const messageController = require("../controllers/message");
const { isValidDate, calculateNextBirthday } = require("./date");

const sendMessage = (user, message) => {
  const requestBody = {
    recipient: {
      id: user,
    },
    message: {
      text: message,
    },
  };

  request(
    {
      uri: "https://graph.facebook.com/v2.6/me/messages",
      qs: {
        access_token: process.env.PAGE_ACCESS_TOKEN,
      },
      method: "POST",
      json: requestBody,
    },
    (err, res, body) => {
      if (!err && res.statusCode == 200) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
};

module.exports = {
  messageWebhook: async (data) => {
    const { user, mid, message, timestamp } = data;

    return new Promise(async (resolve, reject) => {
      let userId = false;
      if (message === "WELCOME") {
        userController.delete(user);
      } else {
        userId = await userController.getById(user);
      }
      if (!userId) {
        await userController.create({
          user,
        });
        sendMessage(user, FIRST_NAME);
      } else {
        if (!userId.first_name) {
          console.log("message", message);
          await userController.updateData(user, {
            first_name: message,
          });

          sendMessage(user, BITRHDAY);
        } else {
          if (!userId.birthdate) {
            if (isValidDate(message)) {
              userController.updateData(user, { birthdate: message });
              sendMessage(user, RANGE_BIRTHDAY);
            } else {
              sendMessage(user, WRONG_DATE);
            }
          } else {
            if (POSITIVE_BUTTON.includes(message.toLowerCase())) {
              const diff = calculateNextBirthday(userId.birthdate);
              sendMessage(
                user,
                `There are ${diff} days left until your next birthday`
              );
            } else if (NEGATIVE_BUTTON.includes(message.toLowerCase())) {
              sendMessage(user, GOODBYE);
            } else {
              sendMessage(user, BITRHDAY);
            }
          }
        }
      }

      messageController.create({
        user,
        mid,
        message,
        timestamp,
      });

      resolve("SUCCESS");
    });
  },
};
