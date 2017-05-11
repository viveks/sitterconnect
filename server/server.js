var express = require('express');
var bodyParser = require ('body-parser');

var db = require('./db/db.js');
var {logActivity} = require('./handlers/activityHandler');

var app = new express();

//log the incoming request
app.use((req,res, next) => {
  var now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});

//parse json input
app.use(bodyParser.json());

//logActivity
app.post('/logActivity',logActivity);

//getActivityFeed
//app.get('/getActivityFeed')

app.listen(3000,() => {
  console.log('started on port 3000');
});
