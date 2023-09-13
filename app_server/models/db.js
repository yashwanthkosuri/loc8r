const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

var gracefulShutdown;
var dbURI = "mongodb+srv://22eg506a08:geWQn7KJLNOZUzI3@cluster0.m79efcq.mongodb.net/";
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);
mongoose.connection.on('connected', () => {
 console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
 console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
 console.log('Mongoose disconnected');
});

require('./locations');
