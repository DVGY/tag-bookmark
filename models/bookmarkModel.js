const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema(
  {
    link: {
      type: String,
      required: [true, 'Bookmark URL or Link is required'],
      unique: true,
    },
    title: String,
    createdAt: Number,
    updatedAt: Number,
    Publisher: String,
    tags: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Tag',
      },
    ],
  },
  {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  }
);

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
