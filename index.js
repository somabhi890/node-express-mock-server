var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var cors = require('cors');
var port=3600;
var path = require('path');


//rename the following with your .json filename containing valid json data obj
var data = require('./data.json');

app.use(cors());



app.get('/', function(req, res){
	res.send('Hi There. Welcome to MockServer');
});


app.get('/mockData', function(req,res){
		res.json(data);
});

app.listen(port);
console.log('Runnig on port : '+ port);
