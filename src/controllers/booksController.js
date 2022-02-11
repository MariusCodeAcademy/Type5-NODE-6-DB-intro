/* eslint-disable no-underscore-dangle */

const { successResponce, failResponce } = require('../helpers/dbHelpers');
const { getAllAuthorsFromDb } = require('../models/authorModel');
const { getAllBookInfoFromDb, getAllBooksBb } = require('../models/booksModel');

async function booksIndex(req, res) {
  const allBooks = await getAllBooksBb();
  const allAuthors = await getAllAuthorsFromDb();

  if (allBooks === false || allAuthors === false) return failResponce();

  // console.log('allBooks ===', allBooks);
  // console.log('allAuthors ===', allAuthors);

  const allBooksWithAuthorNames = allBooks.map((bookObj) => {
    // gauti autoriaus name pagal id
    const foundAuthorObj = allAuthors.find(
      (authorObj) => authorObj._id.toString() === bookObj.author.toString(),
    );
    // irasyti ta name i nauja objekta ir ji pagrazinti
    return {
      ...bookObj,
      authorName: foundAuthorObj.name,
    };
  });

  return successResponce(res, allBooksWithAuthorNames);
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
