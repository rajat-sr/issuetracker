import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: false,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  emailId: {
    type: String,
    required: false,
    trim: true
  },
  memberOf: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Board'
    }
  ]
});

export default mongoose.model('User', UserSchema);
