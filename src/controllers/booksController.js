const { successResponce } = require('../helpers/dbHelpers');

async function booksIndex(req, res) {
  successResponce(res, 'hello from booksIndex');
}

module.exports = {
  booksIndex,
};
