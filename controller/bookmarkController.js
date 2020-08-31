const Bookmark = require('../models/bookmarkModel');
const Tag = require('../models/tagModel');

exports.createBookmark = async (req, res) => {
  const { link } = req.body;

  try {
    const newBookmark = await Bookmark.create({
      link,
    });
    res.status(201).json({ data: newBookmark, status: 'successfull' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err, status: 'fail' });
  }
};
exports.getAllBookmark = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find();
    res.status(200).json({ data: bookmarks, status: 'successful' });
  } catch (error) {
    console.log(err);
    res.status(401).json({ data: err, status: 'fail' });
  }
};
exports.deleteBookmark = async (req, res) => {
  const bookmarkId = req.params.id;

  try {
    const bookmark = await Bookmark.findByIdAndDelete(bookmarkId);
    if (!bookmark) {
      res.status(404).json({
        status: 'fail',
        msg: 'Not found',
      });
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err,
    });
  }
};

exports.addTagToBookmark = async (req, res) => {
  const bookmarkId = req.params.id;

  const { title } = req.body;

  try {
    const newTag = await Tag.create({ title });
    console.log(newTag);
    const bookmark = await Bookmark.findById(bookmarkId);
    console.log(bookmark);
    const newBookmark = await Bookmark.findOneAndUpdate(
      { _id: req.params.id },
      { tags: newTag._id },
      { new: true }
    );

    if (!bookmark) {
      res.status(404).json({
        status: 'fail',
        msg: 'Not found',
      });
    }
    res.status(201).json({
      status: 'success',
      data: newBookmark,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      data: err,
    });
  }
};
