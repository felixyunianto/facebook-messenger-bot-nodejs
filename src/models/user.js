"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Message, {
        as : 'messages',
        foreignKey : 'user'
      });
    }
  }
  User.init(
    {
      user: {
        type: DataTypes.STRING,
        primaryKey : true
      },
      first_name: DataTypes.STRING,
      birthdate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,
    }
  );
  return User;
};
