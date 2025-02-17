const {Redis} = require('ioredis') ;

const client = new Redis() ;

// by using this client we can interect with the redis server
module.exports = client ;

