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

// GET /api/todos (grazinam pries tai sukurtus todo elemenus)
// sukuriam todoRoutes.js, todoContoller.js, isitraukiam routes i server.js
// POST /api/todos/new (sukuriam nauja todo is gautu duomenu post metodu)

// GET /api/users (grazina users is test db)
// app.get('/api/users', async (req, res) => {});

const usersRoutes = require('./routes/usersRoutes');

app.use('/', usersRoutes);

// Launch app
app.listen(PORT, console.log(`server online on port ${PORT}`));
