"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        as : 'sender',
        foreignKey : 'user'
      });
    }
  }
  Message.init(
    {
      user: DataTypes.STRING,
      mid: DataTypes.STRING,
      message: DataTypes.TEXT,
      timestamp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Message",
      timestamps: false,
    }
  );
  return Message;
};
