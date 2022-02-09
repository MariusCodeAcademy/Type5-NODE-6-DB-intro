const { ObjectId } = require('mongodb');
const dbClient = require('../db');

async function getAllUserFromDb() {
  try {
    await dbClient.connect();

    const query = {};
    const options = { sort: { age: -1 }, projection: { _id: 0 } };

    const dataFromDb = await dbClient
      .db('Test')
      .collection('Users')
      .find(query, options)
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
    // console.log('userObjectId ===', userObjectId);
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

async function getUsersInTowns(townsArr) {
  try {
    await dbClient.connect();

    const query = { town: { $in: townsArr } };
    const options = { sort: { age: -1 }, projection: { _id: 0 } };

    const dataFromDb = await dbClient
      .db('Test')
      .collection('Users')
      .find(query, options)
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
  getSingleUserFromDb,
  getUsersInTowns,
};
