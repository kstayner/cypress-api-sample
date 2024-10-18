'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * This migration adds the "last_login" column to the "users" table.
 */
module.exports = {
  async up(db, client) {
    await db.collection('users').updateMany({}, {
      $set: {
        last_login: null
      }
    });
  },

  async down(db, client) {
    await db.collection('users').updateMany({}, {
      $unset: {
        last_login: ""
      }
    });
  }
};