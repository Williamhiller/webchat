//   引入
const mongoose = require('mongoose');
// const config = require('../config/config');
// 用于异步回调
mongoose.Promise = require('bluebird');
const uri = "mongodb://william:liu123@cluster0-jyw35.mongodb.net/test?retryWrites=true&w=majority";
// global.db = mongoose.connect(`mongodb://${config.db.servername}:${config.db.port}/${config.db.DATABASE}`);
global.db = mongoose.connect(uri, { useMongoClient: true });

module.exports = mongoose


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://william:liu123@cluster0-jyw35.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("vuechat").collection("test");
//   console.log(collection)
//   // perform actions on the collection object
//   client.close();
// });

