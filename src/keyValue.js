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

function setHashValue () {
  console.log(` ->  Insert in 'hash0001' key '321' with 'toto' at value`)
  client.hset('hash0001', '321', 'toto')
}

function readHashValue (hash, key) {
  client.hget(hash, key, (error, response) => {
    if (error) {
      console.log(error)
    } else {
      console.log(` ->  Read hash ${hash}, key ${key}, result: ${response}`)
    }
  })
}

setValue()
setTimeout(() => {readValue('key00001', 500)}, 500)
setTimeout(() => {readValue('key00001', 1500)}, 1500)
setTimeout(() => {setHashValue()}, 2000)
setTimeout(() => {readHashValue('hash0001', '321')}, 2500)
