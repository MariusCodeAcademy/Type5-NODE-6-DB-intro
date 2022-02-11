const { ObjectId } = require('mongodb');
const dbClient = require('../db');

async function getAllBookInfoFromDb(bookId) {
  try {
    await dbClient.connect();
    const foundBook = await dbClient
      .db('library')
      .collection('books')
      .findOne(ObjectId(bookId));

    const authorObj = await dbClient
      .db('library')
      .collection('authors')
      .findOne(ObjectId(foundBook.author));
    // console.log('foundBook b4 ===', foundBook);
    foundBook.authorName = authorObj.name;
    // console.log('foundBook af ===', foundBook);

    await dbClient.close();
    return foundBook;
  } catch (error) {
    console.warn('getAllAuthorsFromDb function error', error);
    return false;
  }
}

async function getAllBooksBb() {
  try {
    await dbClient.connect();
    const allBooks = await dbClient
      .db('library')
      .collection('books')
      .find()
      .toArray();
    await dbClient.close();

    return allBooks;
  } catch (error) {
    console.warn('getAllBooksBb function error', error);
    return false;
  }
}

async function findBookAndSetId(bookId, authorId) {
  try {
    if (!bookId || !authorId) throw new Error('bookId, authorId nepaduoti');
    await dbClient.connect();
    const filter = { _id: ObjectId(bookId) };
    const updateDoc = { $set: { author: ObjectId(authorId) } };
    // jei nera tokios property jis sukuria
    const options = { upsert: true };
    const updateResult = await dbClient
      .db('library')
      .collection('books')
      .updateOne(filter, updateDoc, options);

    await dbClient.close();

    return updateResult;
  } catch (error) {
    console.warn('getAllBooksBb function error', error);
    return false;
  }
}

module.exports = {
  getAllBookInfoFromDb,
  getAllBooksBb,
  findBookAndSetId,
};
