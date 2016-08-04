/**
 * Created by dujinqiao on 16-8-3.
 */
'use strict';

var express = require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/user',function (reg,res) {

    console.log('it is client '+reg.params.name);
    res.send(reg.params.name);
});

app.listen(4000,function () {
    console.log('4000 port');
});
