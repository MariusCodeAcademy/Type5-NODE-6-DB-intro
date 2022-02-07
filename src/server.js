const express = require('express');

const app = express();
const PORT = 3000;

//  Middleware

// Routes
// people masyvas kuriame yra objektai su id, name, email, married
// Sukuriam routes
// GET /api/people (grazina zmones)
// POST /api/people/new (irasom nauja zmogu i sarasa)
// sukurti peopleConntroller

// Launch app
app.listen(PORT, console.log(`server online on port ${PORT}`));
