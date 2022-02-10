const express = require('express');
const { authorsIndex, addAuthor } = require('../controllers/authorsController');

const router = express.Router();

router.get('/', authorsIndex);
router.post('/add', addAuthor);

module.exports = router;
