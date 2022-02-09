const dbClient = require('../db');

async function getAllUserFromDb() {
  try {
    await dbClient.connect();
    const dataFromDb = await dbClient
      .db('Test')
      .collection('Users')
      .find()
      .toArray();

    await dbClient.close();

    return dataFromDb;
  } catch (error) {
    console.warn('getAllUserFromDb function error', error);
    return false;
  }
}

module.exports = {
  getAllUserFromDb,
};
