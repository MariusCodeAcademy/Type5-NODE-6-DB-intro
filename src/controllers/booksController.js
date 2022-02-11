/* eslint-disable no-underscore-dangle */
const { ObjectId } = require('mongodb');
const { successResponce, failResponce } = require('../helpers/dbHelpers');
const { getAllAuthorsFromDb } = require('../models/authorModel');
const { getAllBookInfoFromDb, getAllBooksBb } = require('../models/booksModel');

// TODO: compare ObjectIds
async function booksIndex(req, res) {
  const allBooks = await getAllBooksBb();
  const allAuthors = await getAllAuthorsFromDb();

  if (allBooks === false || allAuthors === false) return failResponce();

  // console.log('allBooks ===', allBooks);
  // console.log('allAuthors ===', allAuthors);

  const allBooksWithAuthorNames = allBooks.map((bookObj) => {
    // console.log('bookObj in map ===', bookObj);
    // console.log('bookObj.author ===', bookObj.author);
    // console.log('allAuthors[0]._id ===', allAuthors[0]._id);
    // console.log('allAuthors[0]._id.valueOf() ===', allAuthors[0]._id.valueOf());
    // gauti autoriaus name pagal id
    const foundAuthorObj = allAuthors.find((authorObj) => {
      if (authorObj._id === bookObj.author) {
        console.log('lygus');
        return true;
      }
    });
    console.log('foundAuthorObj ===', foundAuthorObj);
    // irasyti ta name i nauja objekta ir ji pagrazinti
    return {
      ...bookObj,
      authorName: 'name',
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
