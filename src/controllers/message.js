const responseHelper = require("../helpers/response");
const { User, Message, Sequelize } = require("../models");

module.exports = {
  create: async (data) => {
    await Message.create(data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  },

  get: async (req, res) => {
    await Message.findAll()
      .then((response) => {
        return responseHelper(
          res,
          "Successfully get all messages",
          200,
          response
        );
      })
      .catch((err) => {
        return responseHelper(res, "Something went wrong", 500, err);
      });
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      let message = await Message.findOne({ where: { id: id } });

      if (message) {
        return responseHelper(res, "Successfully get a message", 200, message);
      } else {
        return responseHelper(res, "Data is not available in our records", 404);
      }
    } catch (err) {
      return responseHelper(res, "Something went wrong", 500);
    }
  },

  summary: (req, res) => {
    User.findAll({
      attributes: [['user' , 'user_id'], ['first_name', 'name']],
      include: {
        as : 'messages',
        model: Message
      }
    }).then((response) => {
      return responseHelper(res, "Successfully get a message", 200, response);
    })
    .catch((err) => {
      console.log(err)
      return responseHelper(res, "Something went wrong", 500, err);
    })
  },
};
