const start = async () => {
  const config = require('./config.json')
  return config;
}

const stop = async () => {

}

const dependencies = []

module.exports = { start, stop, dependencies }