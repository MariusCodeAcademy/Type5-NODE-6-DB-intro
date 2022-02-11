const { successResponce, failResponce } = require('../helpers/dbHelpers');
const { getAllBookInfoFromDb } = require('../models/booksModel');

async function booksIndex(req, res) {
  successResponce(res, 'hello from booksIndex');
}
async function allBookInfo(req, res) {
  const { bookId } = req.params;
  const bookInfo = await getAllBookInfoFromDb(bookId);

  if (bookInfo === false) {
    failResponce(res);
    return;
  }
  successResponce(res, bookInfo);
}
async function addBook(req, res) {
  successResponce(res, req.body);
}

module.exports = {
  booksIndex,
  addBook,
  allBookInfo,
};
