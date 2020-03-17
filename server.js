var http = require('http');
var url = require('url');
var express = require('express');
const router = express.Router();
var app = express();

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (queryData.fname){
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
        Fname = (queryData.fname).toUpperCase();

        FnameLength = (queryData.fname).length;

        Sname =(queryData.sname).toUpperCase();

        SnameLength = (queryData.sname).length;

        var lovecount = 0;

        for (var i = 0; i < FnameLength; i++) {
            var L1 = Fname.substring(i, i + 1);

            if (L1 == "A") lovecount += 3;

            if (L1 == "E") lovecount += 3;

            if (L1 == "I") lovecount += 3;

            if (L1 == "O") lovecount += 3;

            if (L1 == "U") lovecount += 4;

            if (L1 == "L") lovecount += 1;

            if (L1 == "V") lovecount += 4;
        }

        for (var count = 0; count < SnameLength; count++) {
            var L2 = Sname.substring(count, count + 1);

            if (L2 == "A") lovecount += 3;

            if (L2 == "E") lovecount += 3;

            if (L2 == "I") lovecount += 3;

            if (L2 == "L") lovecount += 3;

            if (L2 == "O") lovecount += 4;

            if (L2 == "V") lovecount += 1;

            if (L2 == "E") lovecount += 4;
        }

        var Total = 0;

        if (lovecount > 0) Total = 5 - (FnameLength + SnameLength) / 2;

        if (lovecount > 2) Total = 10 - (FnameLength + SnameLength) / 2;

        if (lovecount > 4) Total = 20 - (FnameLength + SnameLength) / 2;

        if (lovecount > 6) Total = 30 - (FnameLength + SnameLength) / 2;

        if (lovecount > 8) Total = 40 - (FnameLength + SnameLength) / 2;

        if (lovecount > 10) Total = 50 - (FnameLength + SnameLength) / 2;

        if (lovecount > 12) Total = 60 - (FnameLength + SnameLength) / 2;

        if (lovecount > 14) Total = 70 - (FnameLength + SnameLength) / 2;

        if (lovecount > 16) Total = 80 - (FnameLength + SnameLength) / 2;

        if (lovecount > 18) Total = 90 - (FnameLength + SnameLength) / 2;

        if (lovecount > 20) Total = 100 - (FnameLength + SnameLength) / 2;

        if (lovecount > 22) Total = 110 - (FnameLength + SnameLength) / 2;

        if (FnameLength == 0 || SnameLength == 0) Total = "Error";

        if (Total < 0) Total = 0;

        if (Total > 99) Total = 100;

        var result = Math.floor(Total);

        //  alert("Toatal" + Math.floor(Total));
        if (result >= 0 && result <= 15) {
            quote = "Soo Sad booooo"
        }
        if (result >= 16 && result <= 40) {
            quote = "Nice But can find someone better"
        }
        if (result >= 41 && result <= 70) {
            quote = "Average "
        }
        if (result >= 71 && result <= 90) {
            quote = "Really Nice RelationShip"
        }
        if (result > 90) {
            quote = "Strongest Love Ever Exist"
        }
        var responses =
        {results: result,quotes:quote}
        
        response.end(JSON.stringify(responses))
        //console.log(responses)  
           
    }

  else {
    response.end("Hello World\n");
  }
  });

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(5000);