const { ObjectId } = require('mongodb');
const dbClient = require('../db');

async function createAuthor(newAuthorDataFromUser) {
  try {
    await dbClient.connect();
    const createResult = await dbClient
      .db('library')
      .collection('authors')
      .insertOne(newAuthorDataFromUser);
    await dbClient.close();
    return createResult;
  } catch (error) {
    console.warn('error in createAuthor', error);
    return false;
  }
}

// getAllAuthors authorModel
async function getAllAuthorsFromDb() {
  try {
    await dbClient.connect();
    const dataFromDb = await dbClient
      .db('library')
      .collection('authors')
      .find()
      .toArray();
    await dbClient.close();
    return dataFromDb;
  } catch (error) {
    console.warn('getAllAuthorsFromDb function error', error);
    return false;
  }
}

async function deleteSingleAuthorFromDb(authorId) {
  try {
    await dbClient.connect();
    const deleteResult = await dbClient
      .db('library')
      .collection('authors')
      .deleteOne({ _id: ObjectId(authorId) });
    await dbClient.close();
    return deleteResult;
  } catch (error) {
    console.warn('error in deleteSingleAuthorFromDb', error);
    return false;
  }
}

module.exports = {
  createAuthor,
  getAllAuthorsFromDb,
  deleteSingleAuthorFromDb,
};
