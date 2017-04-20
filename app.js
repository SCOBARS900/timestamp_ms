var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues', function(req, res, next) {
  console.log('URL works'); 
});












app.listen(3000, function() {
   console.log('Local Server ON');
});