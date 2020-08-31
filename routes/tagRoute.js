const express = require('express');
const tagController = require('../controller/tagController');

const router = express.Router();

//Create Tag
router.route('/').get(tagController.getAllTag).post(tagController.createTag);
router.route('/:id').delete(tagController.deleteTag);

module.exports = router;
