const express = require('express');
const {
  authorsIndex,
  addAuthor,
  removeAuthor,
} = require('../controllers/authorsController');

const router = express.Router();

router.get('/', authorsIndex);
router.post('/add', addAuthor);
// /api/authors/:authorId
router.delete('/:authorId', removeAuthor);

module.exports = router;
