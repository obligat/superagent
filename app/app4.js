var express = require('express');
var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/user',function (req,res) {
    res.send(req.get('input'));
});


app.listen(6000,function () {
    console.log('6000 port !!')
});