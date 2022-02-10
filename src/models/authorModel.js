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

module.exports = {
  createAuthor,
  getAllAuthorsFromDb,
};
