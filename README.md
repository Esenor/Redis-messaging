# Redis-messaging #

Simple messaging system with Redis in Node.js

[redis client](https://www.npmjs.com/package/redis)

## Install ##

    # Mount Redis container or install redis
    docker run --name simple-redis -d -p "8379:6379" redis
    # Install npm dependencies
    npm install

## Run ##

> If redis is not listening port localhost:8379 edit **etc/redis.json**

    # standard key/value
    npm start

    # Messaging listener
    npm run subscriber

    # Messaging publisher
    npm run publisher
