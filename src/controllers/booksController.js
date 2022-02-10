const { successResponce } = require('../helpers/dbHelpers');

async function booksIndex(req, res) {
  successResponce(res, 'hello from booksIndex');
}
async function addBook(req, res) {
  successResponce(res, req.body);
}

module.exports = {
  booksIndex,
  addBook,
};
