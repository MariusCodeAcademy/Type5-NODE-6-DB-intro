/* eslint-disable linebreak-style */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

//  Middleware
app.use(morgan('dev'));
// kad galetume gauti duomenis json formatu
app.use(express.json());

// Routes
// people masyvas kuriame yra objektai su id, name, email, married
// Sukuriam routes
// GET /api/people (grazina zmones)
// POST /api/people/new (irasom nauja zmogu i sarasa)
// sukurti peopleConntroller

// GET /api/users (grazina users is test db)
// app.get('/api/users', async (req, res) => {});

const usersRoutes = require('./routes/usersRoutes');

app.use('/', usersRoutes);

// Launch app
app.listen(PORT, console.log(`server online on port ${PORT}`));
