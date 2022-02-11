const express = require('express');

const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/api/books', booksController.booksIndex);
router.get('/api/books/single/:bookId', booksController.allBookInfo);
// POST /api/books/add (grazina ka gauna i req.body)
router.post('/api/books/add', booksController.addBook);
router.patch('/api/books/set-author-id/:bookId', booksController.setAuthorId);
// put - atnaujinam visa objekta
// patch - atnaujinam 1-2 reikmes

module.exports = router;
