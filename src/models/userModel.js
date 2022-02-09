const { ObjectId } = require('mongodb');
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
async function getSingleUserFromDb(id) {
  try {
    const userObjectId = new ObjectId(id);
    await dbClient.connect();
    const dataFromDb = await dbClient
      .db('Test')
      .collection('Users')
      .findOne({ _id: userObjectId });

    await dbClient.close();

    return dataFromDb;
  } catch (error) {
    console.warn('getSingleUserFromDb function error', error);
    return false;
  }
}

module.exports = {
  getAllUserFromDb,
  getSingleUserFromDb,
};
