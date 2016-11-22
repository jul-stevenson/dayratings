var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var twilio = require('twilio');
var Database = require('./db');
var app = express();
var client = twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
var port = process.env.PORT || 3000;

var defaultMongoDBUrl = 'mongodb://localhost:27017/dayratings';
var DataBaseURL = process.env.MONGO_URL || defaultMongoDBUrl;

app.set('view engine', 'pug');

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
});

client.sendMessage({
  to: '5743399220',
  from: '5743672678',
  body: 'Hi Julie! This is your new app!'
});
