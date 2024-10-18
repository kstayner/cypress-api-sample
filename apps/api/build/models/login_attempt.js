import mongoose from 'mongoose';
import User from './user';

const { Schema } = mongoose;

const loginAttemptSchema = new Schema({
  attempt_time: { type: Date, required: true },
  success: { type: Boolean, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

loginAttemptSchema.virtual('user', {
  ref: 'User',
  localField: 'user_id',
  foreignField: '_id',
  justOne: true,
});

export default mongoose.model('LoginAttempt', loginAttemptSchema);