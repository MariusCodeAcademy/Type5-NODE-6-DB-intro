const { ObjectId } = require('mongodb');
const { successResponce, failResponce } = require('../helpers/dbHelpers');
const { createAuthor } = require('../models/authorModel');

async function authorsIndex(req, res) {
  successResponce(res, 'hello from authorsIndex');
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
