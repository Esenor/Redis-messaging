var config = require('../etc/redis.json')
var redis = require('redis')
var publisher = redis.createClient(config)

function loop (message = 'Publisher connected') {
  setTimeout(() => {
    publisher.publish('efc', messageFormater(message) );
    loop(Math.random())
  }, 250)
}

function exitHandler () {
  publisher.publish('efc', messageFormater('Publisher disconnected'));
  publisher.quit()
}

function messageFormater (message = 'null') {
  return `message::${message}`
}

process.on('exit', exitHandler.bind())
process.on('SIGINT', exitHandler.bind())
process.on('uncaughtException', exitHandler.bind())

loop()
