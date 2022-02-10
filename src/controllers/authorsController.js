const { successResponce } = require('../helpers/dbHelpers');

async function authorsIndex(req, res) {
  successResponce(res, 'hello from authorsIndex');
}
async function addAuthor(req, res) {
  successResponce(res, req.body);
}

module.exports = {
  authorsIndex,
  addAuthor,
};
