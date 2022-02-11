const { successResponce, failResponce } = require('../helpers/dbHelpers');
const { getAllBookInfoFromDb, getAllBooksBb } = require('../models/booksModel');

async function booksIndex(req, res) {
  const allBooks = await getAllBooksBb();

  if (allBooks === false) return failResponce();

  return successResponce(res, allBooks);
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
