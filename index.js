var express = require('express');
var app = express();
var router = require("./src/routes");
var path = require('path');
var bodyparser = require('body-parser');
var cors = require('cors');

/*app.get('/', function(req, res){
    //res.sendFile("C:\Users\sindhuri\Documents\personal projects\smartrent\src\index.html");
    res.sendFile(path.join(__dirname + '/src/index.html'));
    });*/

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use('/',router);
app.listen(4011);