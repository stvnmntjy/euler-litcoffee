// Generated by CoffeeScript 1.4.0
var express, server;

express = require('express');

server = express();

server.configure(function() {
  server.use(express["static"]("" + __dirname + "/public"));
});

server.get('/*', function(req, res) {
  res.set({
    'Content-Type': 'text/html',
    'Content-Encoding': 'UTF-8',
    'Content-Language': 'en-us'
  });
  res.sendfile('public/index.html');
});

server.listen(3000);

console.log('listening on port 3000!');
