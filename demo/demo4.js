/**
 * Created by dujinqiao on 16-8-3.
 */

var request = require('superagent');

request.post('localhost:6000/user')
    .type('form')
    .set('Content-Type','application/json')
    .send({'input':'1234'})
    .end(function (err,req) {
        if(req.ok){
            console.log('yes  '+req.body.input)
        }
        else {
            console.log('no  '+req.body)
        }
    });