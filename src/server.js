/* eslint-disable linebreak-style */
require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_CONNECTION_STRING = process.env.MONGO_DB_STRING;
const dbClient = new MongoClient(MONGO_CONNECTION_STRING);

//  Middleware

// Routes
// people masyvas kuriame yra objektai su id, name, email, married
// Sukuriam routes
// GET /api/people (grazina zmones)
// POST /api/people/new (irasom nauja zmogu i sarasa)
// sukurti peopleConntroller

// GET /api/users (grazina users is test db)
app.get('/api/users', async (req, res) => {
  // 1 prisijungti prie db
  const connection = await dbClient.connect();
  // 2 atlikti veiksmus (gauti duomenis/ irasyt)
  const data = await connection.db('Test').collection('Users').find().toArray();
  // 3 uzdaryti db prisijungima
  await connection.close();
  // 4 grazinam useriui duomenis
  res.json({
    success: true,
    data,
  });
});

// Launch app
app.listen(PORT, console.log(`server online on port ${PORT}`));
