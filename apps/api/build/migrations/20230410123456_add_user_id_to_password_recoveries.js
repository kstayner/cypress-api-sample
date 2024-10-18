'use strict';
const { Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('password_recoveries', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
      }
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('password_recoveries', 'user_id');
  }
};