var amqp = require('amqplib')
let rabbit;

const start = async ({ config }) => {
  await amqp.connect(config.rabbit.url).then((connection) => {
    console.log('RabbitMQ connected');
    rabbit = connection;
  });
  return rabbit;
}

const stop = async () => {
  await rabbit.close()
  console.log('RabbitMQ shut down')
}

const dependencies = ['config'];

module.exports = { start, stop, dependencies }