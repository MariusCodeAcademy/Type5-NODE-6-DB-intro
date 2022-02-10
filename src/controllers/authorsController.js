const { ObjectId } = require('mongodb');
const { successResponce, failResponce } = require('../helpers/dbHelpers');
const { createAuthor, getAllAuthorsFromDb } = require('../models/authorModel');

async function authorsIndex(req, res) {
  const allAuthors = await getAllAuthorsFromDb();
  if (allAuthors === false) {
    failResponce(res);
    return;
  }
  successResponce(res, allAuthors);
}
async function addAuthor(req, res) {
  const { body } = req;
  const createResult = await createAuthor(body);
  if (createResult === false) {
    failResponce(res);
    return;
  }
  successResponce(res, createResult);
}

module.exports = {
  authorsIndex,
  addAuthor,
};
