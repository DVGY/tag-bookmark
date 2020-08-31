const Tag = require('../models/tagModel');

exports.createTag = async (req, res) => {
  const { title, tags } = req.body;
  try {
    const newTag = await Tag.create({
      title,
      tags,
    });
    res.status(201).json({ data: newTag, status: 'successfull' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err, status: 'fail' });
  }
};
exports.getAllTag = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json({ data: tags, status: 'successfull' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err, status: 'fail' });
  }
};
exports.deleteTag = async (req, res) => {
  const tagId = req.params.id;

  try {
    const tag = await Tag.findByIdAndDelete(tagId);
    if (!tag) {
      res
        .status(200)
        .json({ data: null, status: 'fail', msg: 'Tag not found' });
    }
    res.status(204).json({ data: null, status: 'successfull' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err, status: 'fail' });
  }
};
