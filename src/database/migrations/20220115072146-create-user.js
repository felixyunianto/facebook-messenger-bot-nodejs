'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      user: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};