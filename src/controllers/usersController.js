const dbClient = require('../db');
const { successResponce, failResponce } = require('../helpers/dbHelpers');
const userModel = require('../models/userModel');

async function usersIndex(req, res) {
  const allUsersDataFromDB = await userModel.getAllUserFromDb();

  if (allUsersDataFromDB) {
    successResponce(res, allUsersDataFromDB);
    return;
  }
  failResponce(res);

  // kitas budas pasiekti pan rezulata
  // if (allUsersDataFromDB === false) {
  //   failResponce(res);
  //   return;
  // }
  // successResponce(res, allUsersDataFromDB);
}

async function addUser(req, res) {
  const dataGotFromUser = req.body;
  console.log('dataGotFromUser ===', dataGotFromUser);

  try {
    // 1 prisijungti prie db
    const connection = await dbClient.connect();
    // 2 atlikti veiksmus (gauti duomenis/ irasyt)
    const insertOneResult = await connection
      .db('Test')
      .collection('Users')
      .insertOne(dataGotFromUser);
    // 3 uzdaryti db prisijungima
    await connection.close();
    res.json({
      success: true,
      data: 'user created',
      result: insertOneResult,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Something went wrong',
    });
  }
}

async function users35(req, res) {
  const { age } = req.params;
  try {
    // 1 prisijungti prie db
    await dbClient.connect();
    // 2 atlikti veiksmus (gauti duomenis/ irasyt)
    const data = await dbClient
      .db('Test')
      .collection('Users')
      .find({ age: { $gt: Number(age) } })
      .toArray();
    // 3 uzdaryti db prisijungima
    await dbClient.close();
    // 4 grazinam useriui duomenis
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Something went wrong',
    });
  }
}

async function getUserTownString(req, res) {
  // console.log('getUserById func ran ===');
  const { townString } = req.params;
  const townArrFromString = townString.split(',');
  console.log('townArrFromString ===', townArrFromString);
  const foundUserInDb = await userModel.getUsersInTowns(townArrFromString);
  if (foundUserInDb === false) {
    failResponce(res);
    return;
  }
  successResponce(res, foundUserInDb);
}
async function getUserById(req, res) {
  // console.log('getUserById func ran ===');
  const { userId } = req.params;
  const foundUserInDb = await userModel.getSingleUserFromDb(userId);

  if (foundUserInDb === false) {
    failResponce(res);
    return;
  }
  successResponce(res, foundUserInDb);
}

module.exports = {
  usersIndex,
  addUser,
  users35,
  getUserById,
  getUserTownString,
};
