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

module.exports = {
  createAuthor,
};
