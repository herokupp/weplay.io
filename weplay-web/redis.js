
var redis = require('redis');
var uri = process.env.REDIS_URL || 'localhost:6379';
var pieces = uri.split(':');

module.exports = function(){
  return redis.createClient(uri);
  //return redis.createClient(pieces[1], pieces[0], { return_buffers: true });
};
