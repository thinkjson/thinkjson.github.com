var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));
app.listen(parseInt(process.ARGV[2], 10) || 8080);