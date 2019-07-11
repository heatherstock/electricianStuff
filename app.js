const start = async ({ mongo, rabbit }) => {
  await mongo.createCollection('collection')
}

module.exports = { start }