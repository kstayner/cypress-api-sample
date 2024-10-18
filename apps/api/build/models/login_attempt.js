import mongoose from 'mongoose';
import User from './user';

const { Schema } = mongoose;

const loginAttemptSchema = new Schema({
  attempt_time: { type: Date, required: true },
  success: { type: Boolean, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
});

loginAttemptSchema.virtual('user', {
  ref: 'User',
  localField: 'user_id',
  foreignField: '_id',
  justOne: true,
});

loginAttemptSchema.statics.recordAttempt = async function(user_id, attempt_time, success) {
  const attempt = new this({
    user_id,
    attempt_time,
    success
  });
  await attempt.save();
  return attempt;
};

export default mongoose.model('LoginAttempt', loginAttemptSchema);