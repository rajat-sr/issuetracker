import mongoose from 'mongoose';

const { Schema } = mongoose;

const BoardSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: false
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false
    },
    members: [
      {
        member: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        role: {
          type: String,
          enum: ['SUPERADMIN', 'ADMIN', 'USER', 'INVITED'],
          default: 'USER',
          required: false
        }
      }
    ],
    lifeCycles: [
      {
        name: {
          type: String,
          trim: true
        },
        issues: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Issue'
          }
        ],
        sequenceNumber: {
          type: Number,
          required: false
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Board', BoardSchema);
