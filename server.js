var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));
var port = process.argv.length > 1 && isNaN(process.argv[2]) === false
    ? parseInt(process.argv[2], 10) 
    : 8080;
app.listen(port);
console.log("Listening on port " + port)