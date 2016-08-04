/**
 * Created by dujinqiao on 16-8-3.
 */
var express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/user',function (req,res) {
   res.send(req.body.name);
});

app.listen(5000,function () {
   console.log('5000 port');
});
