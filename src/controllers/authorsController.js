const { successResponce, failResponce } = require('../helpers/dbHelpers');
const {
  createAuthor,
  getAllAuthorsFromDb,
  deleteSingleAuthorFromDb,
} = require('../models/authorModel');

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

async function removeAuthor(req, res) {
  const { authorId } = req.params;
  if (!authorId) return;
  const rmResult = await deleteSingleAuthorFromDb(authorId);
  if (rmResult === false) {
    failResponce(res);
    return;
  }

  successResponce(res, rmResult);
}

module.exports = {
  authorsIndex,
  addAuthor,
  removeAuthor,
};
