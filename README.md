# Redis-messaging #

Simple messaging system with Redis dans Node.js

## Install ##

    # Mount Redis container or install redis
    docker run --name simple-redis -d -p "8379:6379" redis
    # Install npm dependencies
    npm install

## Run ##

> If redis is not listening port localhost:8379 edit **etc/redis.json**

    # Messaging listener
    npm run subscriber

    # Messaging publisher
    npm run publisher
