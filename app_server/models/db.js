<<<<<<< HEAD
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/Loc8r';

mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', () => {
 console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
 console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
 console.log('Mongoose disconnected');
});
const gracefulShutdown = (msg, callback) => {
 mongoose.connection.close( () => {
 console.log(`Mongoose disconnected through ${msg}`);
 callback();
 });
};
// For nodemon restarts
process.once('SIGUSR2', () => {
 gracefulShutdown('nodemon restart', () => {
 process.kill(process.pid, 'SIGUSR2');
 });
});
 // For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
    process.exit(0);
    });
   });
   // For Heroku app termination
   process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
    });
   });

=======
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// BRING IN YOUR SCHEMAS & MODELS
>>>>>>> f7ad43d13b80cf7859d91d2d704298b11482d14e
require('./locations');