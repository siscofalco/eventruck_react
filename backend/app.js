require('dotenv').config();
const express = require('express');

//Database
require('./configs/db.config');

// Debbuger
require('./configs/debugger.config');

const app = express();

// Middleware Setup
require('./configs/middleware.config')(app);

// default value for title local
app.locals.title = 'Eventruck - Express';

// Configs
require('./configs/session.config')(app);

const index = require('./routes/index');
const authRouter = require('./routes/auth.routes');
const privateRouter = require('./routes/private.routes');
const foodtruckRouter = require('./routes/foodtruck.routes');

app.use('/', index);
app.use('/api/auth', authRouter);
app.use('/api/private', privateRouter);
app.use('/api/foodtruck', foodtruckRouter);

module.exports = app;
