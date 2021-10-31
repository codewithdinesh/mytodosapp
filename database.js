
var mongoose = require('mongoose');


const DB = 'mongodb+srv://dinesh:RathodDinesh@dinesh.nqph4.mongodb.net/UIDAIserver?retryWrites=true&w=majority'
port = 3000;

mongoose.connect(DB, { useUnifiedTopology: true });

var conn = mongoose.connection;

conn.on('connected', function () {
    console.log('Database is connected successfully');
});
conn.on('disconnected', function () {
    console.log('Database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;