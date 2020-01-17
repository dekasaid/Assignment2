const express = require("express");
const app            = express();
const http           =require("http");
const server         = http.createServer(app);

const PORT           = 1111;       //default 80; but we want to use to avoid conflict 

app.use(express.static(__dirname + '/public')); //important but arcne line that tells node where 'home' is

//routes
app.get('/', function(req, res){

    res.sendFile(__dirname + 'public/index.html');
});

server.listen(PORT);
console.log('Listening on port: '+ PORT);
