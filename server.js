const electricConfig = require('./electric-config')
const electricMongo = require('./electric-mongo');
const electricRabbit = require('./electric-rabbit');
const app = require('./app');

const allTheThings = {
  config: electricConfig,
  mongo: electricMongo,
  rabbit: electricRabbit
};

const start = async (allTheThings) => {
  const system = {};
  const order = Object.keys(allTheThings).sort();
  for (name of order) {
    const component = allTheThings[name];
    component.dependencies.map(name => {
      return system[name];
    })
    system[name] = await component.start(system);
  }
  app.start(system);
};

const stop = async (allTheThings) => {
  const order = Object.keys(allTheThings).sort().reverse()
  for (name of order) {
    await allTheThings[name].stop();
  }
};

(async () => {
  await start(allTheThings);
  process.on('SIGINT', async () => {
    await stop(allTheThings)
    process.exit()
  })
})();
