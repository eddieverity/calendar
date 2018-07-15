const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const appointments = require('./routes/api/appointments');
const users = require('./routes/api/users');



const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config

const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// User Routes
app.use('/api/users', users);
app.use('/api/appointments', appointments)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));