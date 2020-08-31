const mongoose = require('mongoose');

const tagSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  }
);

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;
