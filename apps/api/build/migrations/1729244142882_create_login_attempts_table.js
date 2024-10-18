'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
  async up(db) {
    let conn = await db.createConnection(process.env.MONGO_URI);
    let loginAttemptsSchema = new Schema({
      attempt_time: { type: Date, required: true },
      success: { type: Boolean, required: true },
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    });
    await conn.model('LoginAttempt', loginAttemptsSchema);
  },

  async down(db) {
    let conn = await db.createConnection(process.env.MONGO_URI);
    await conn.dropCollection('loginattempts');
  },
};