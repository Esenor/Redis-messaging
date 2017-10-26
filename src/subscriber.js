var config = require('../etc/redis.json')
var redis = require('redis')
var subscriber = redis.createClient(config)

subscriber.on('subscribe', (topic, count) => {
  console.log(`just open connexion to redis on topic ${topic}`);
})

subscriber.on('message', (topic, message) => {
  console.log(`Topic ${topic}: ${message}`)
})

function exitHandler () {
  subscriber.unsubscribe();
  subscriber.quit();
}

process.on('exit', exitHandler.bind())
process.on('SIGINT', exitHandler.bind())
process.on('uncaughtException', exitHandler.bind())

subscriber.subscribe('my_topic');
