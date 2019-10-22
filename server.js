// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


//Timestamp Microservice
app.get("/api/timestamp/:date_string?", function (req, res) {
  if (req.params.date_string == null){
    let theDate = new Date();
    res.json({
              'unix': theDate.getTime(),
              'utc': theDate.toUTCString()
            });
  }else{
    let theDate = new Date(parseInt(Date.parse(req.params.date_string)));
    res.json({
              'unix': theDate.getTime(),
              'utc': theDate.toUTCString()
            });
  }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});