var MongoClient = require('mongodb').MongoClient;
let mongo;

const start = async ({ config }) => {
  await MongoClient.connect(config.mongo.url, function(err, db) {
    if (err) throw err;
    console.log('MongoDB connected')
    mongo = db
  });
}

const stop = async () => {
  await mongo.close()
  console.log('MongoDB shut down')
}

const dependencies = ['config'];

module.exports = { start, stop, dependencies }