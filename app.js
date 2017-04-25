var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var fs = require('fs');


var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));



app.get('/:dval', function(req, res) {
  var dval = req.params.dval;
   
  var dateFormattingOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  };
    
  if(isNaN(dval)) {
      var naturalDate = new Date(dval);
      naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
      
      var unixDate = new Date(dval).getTime()/1000; 
  } else {
      var unixDate = dval;
      
      var naturalDate = new Date(dval * 1000);
      naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
  }
    
    if(naturalDate == "Invalid Date") {
        naturalDate = null;
    }
      
  
    
    
  res.json({ unix: unixDate, natural: naturalDate });  
});



app.listen(3000, function() {
   console.log('Local Server ON');
});