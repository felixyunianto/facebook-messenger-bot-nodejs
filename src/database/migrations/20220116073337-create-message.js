'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mid: {
        allowNull: false,
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.TEXT
      },
      timestamp : {
        allowNull: false,
        type: Sequelize.STRING
      }
    });

    await queryInterface.addConstraint('Messages',{
      fields: ['user'],
      type: 'foreign key',
      name: 'fk_user_messages',
      references: {
        table: 'Users',
        field: 'user'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Messages');
  }
};