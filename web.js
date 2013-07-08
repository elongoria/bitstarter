var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var index = fs.readFileSync("index.html", function(err,data){
    if (err) throw err;
    console.log(data);
});

var buffer = new Buffer(fs.readFileSync('index.html', 'utf-8');

app.get('/', function(request, response) {
  response.send("Hello, world");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
