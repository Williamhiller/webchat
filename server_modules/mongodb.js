//   引入
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://william:liu123@cluster0-jyw35.mongodb.net/test?retryWrites=true&w=majority";
let dbConnect;
module.exports = async function () {
  dbConnect = await new Promise(function (resolve, reject) {
    if (dbConnect) {
      resolve(dbConnect);
      return;
    }
    MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, db) {
      if (err) {
        reject(err);
        throw err;
      }
      dbConnect = db;
      console.log('数据库已连接');
      resolve(dbConnect);
    });
  });
  return dbConnect;
};
