'use strict';
const { Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE \`password_recoveries\` ADD COLUMN \`user_id\` INT NOT NULL, ADD CONSTRAINT \`fk_password_recoveries_user_id\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`);
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('password_recoveries', 'user_id');
  }
};