var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var index = fs.readFileSync('index.html', function(err,data){
    if (err) throw err;
    console.log(data);
});

var buffer = new Buffer();
buffer.write(index);

var bufferString = buffer.toString(index);

app.get('/', function(request, response) {
  response.send(bufferString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
