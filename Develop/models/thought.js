const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 1,
    min_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
      get: (date) => date,
    }, 
  }
}); 

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 1,
      min_length: 280,
    },
    createdAt: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    username: {
      type: Date,
      default: Date.now(),
    },
    createdAt: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
      get: (date) => date,
    },
    reactions: [
      reactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model('course', courseSchema);

module.exports = Course;
