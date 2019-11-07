//   引入
const mongoose = require('mongoose');
// const config = require('../config/config');
// 用于异步回调
mongoose.Promise = require('bluebird');
const uri = "mongodb+srv://william:liu123@cluster0-jyw35.mongodb.net";
global.db = mongoose.createConnection(uri, {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'test'}).then(function (a,b) {
  console.log(a, b)

})
console.log(global.db)


module.exports = mongoose
