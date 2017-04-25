var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var fs = require('fs');


var app = express();

app.use(bodyParser.json());
app.use(cors());

app.set('port', (process.env.PORT || 5000));



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



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});