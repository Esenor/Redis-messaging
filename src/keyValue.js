var config = require('../etc/redis.json')
var redis = require('redis')
var client = redis.createClient(config)

client.on('error', (error) => {
  console.log(error)
})

function setValue () {
  console.log(` ->  Insert in 'key00001' with 'Lorem ipsum en dolo at ${new Date() }' at value`)
  client.set('key00001', `Lorem ipsum en dolo at ${new Date()}`)
  console.log(' ->  key00001 TTL to 1 seconde')
  client.expire('key00001', 1)
}

function readValue (key, duration) {
  client.get(key, (error, response) => {
    if (error) {
      console.log(error)
    } else {
      console.log(` ->  Read ${key} after ${duration / 1000} seconde, result: ${response}`)
    }
  })
}

setValue()
setTimeout(() => {readValue('key00001', 500)}, 500)
setTimeout(() => {readValue('key00001', 1500)}, 1500)
