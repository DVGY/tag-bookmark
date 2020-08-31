const express = require('express');
const bookmarkController = require('../controller/bookmarkController');

const router = express.Router();

//Create Bookmark and get all
router
  .route('/')
  .get(bookmarkController.getAllBookmark)
  .post(bookmarkController.createBookmark);

router
  .route('/:id')
  .post(bookmarkController.addTagToBookmark)
  .delete(bookmarkController.deleteBookmark);

module.exports = router;
