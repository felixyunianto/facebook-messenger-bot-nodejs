const { User, Sequelize } = require("../models");

module.exports = {
  create: async (data) => {
    await User.create(data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  },

  getById: (user) => {
    return User.findOne({ where: { user } });
  },
  updateData: async (user, data) => {
    await User.update(data, { where: { user } })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  },

  delete : (user) => {
   User.destroy({
      where : {user}
    })
  }
};
