var config = require('../etc/redis.json')
var redis = require('redis')
var publisher = redis.createClient(config)
let loopData = null

function loop (message = 'Publisher connected') {
  loopData = setTimeout(() => {
    console.log(`Publish to my_topic ${messageFormater(message)}`)
    publisher.publish('my_topic', messageFormater(message) );
    loop(Math.random())
  }, 250)
}

function exitHandler () {
  clearTimeout(loopData)
  publisher.publish('my_topic', messageFormater('Publisher disconnected'));
  console.log('Publisher stop')
  publisher.quit()
}

function messageFormater (message = 'null') {
  return `message::${message}`
}

process.on('exit', exitHandler.bind())
process.on('SIGINT', exitHandler.bind())
process.on('uncaughtException', exitHandler.bind())

loop()
