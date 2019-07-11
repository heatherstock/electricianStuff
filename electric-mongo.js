var MongoClient = require('mongodb').MongoClient;
let mongo;

const start = ({ config }) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(config.mongo.url, function(err, client) {
      if (err) reject(err);
      console.log('MongoDB connected')
      mongo = client
      resolve(mongo.db('mydb'));
    });
  })
}

const stop = async () => {
  await mongo.close()
  console.log('MongoDB shut down')
}

const dependencies = ['config'];

module.exports = { start, stop, dependencies }
