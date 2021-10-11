const mongoose = require('mongoose');
const root = require('app-root-path');
const path = require('path');

//require('dotenv').config({path:root +path.sep + ".env"});

mongoose.connect(
    'mongodb://localhost/travel_blog_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
//process.env.MONGODB_URI ||
module.exports = mongoose.connection;
