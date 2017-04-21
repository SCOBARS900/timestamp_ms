var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/date/:dval', function(req, res, next) {
  var dval = req.params.dval;
   
  var dateFormattingOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  }    
    
    
  res.json({ unix: dval });  
});












app.listen(3000, function() {
   console.log('Local Server ON');
});