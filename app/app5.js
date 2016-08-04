/**
 * Created by dujinqiao on 16-8-2.
 */
'use strict';

var express=require('express');
var app=express();
var bodyParser=require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/user', function(request, response){
    console.log(request.body);      // your JSON
    response.send(request.body.name);    // echo the result back
});


var server=app.listen(7000,function () {
    var host=server.address().address;
    var port=server.address().port;

    console.log('Example app listening  at http://%s:%s',host,port);
});

