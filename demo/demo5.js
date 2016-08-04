/**
 * Created by dujinqiao on 16-8-3.
 */

var app = require('superagent');

app.post('localhost:7000/user')
    .type('form')
    .set('Content-Type','application/json')
    .send('{"name":"five"}')
    .end(function (err,req) {
        if(req.ok){
            console.log(' ok  '+req.text)
        }
        else {
            console.log('no  '+req.text)
        }
    });