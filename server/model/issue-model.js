import mongoose from 'mongoose';

const { Schema } = mongoose;
const IssueSchema = new Schema(
  {
    description: {
      type: String,
      trim: true,
      required: false
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false
    },
    modifiedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    boardId: {
      type: String,
      trim: true,
      required: false
    },
    lifeCycle: {
      type: String,
      trim: true,
      required: false
    },
    tags: [
      {
        name: {
          type: String,
          required: false
        },
        color: {
          type: String,
          required: false
        }
      }
    ],
    dueDate: {
      type: Date
    },
    assignee: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    upvotes: {
      type: Number,
      default: 0
    },
    upvotedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comments'
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Issue', IssueSchema);
