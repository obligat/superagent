var request=require('superagent');

request
    .post('localhost:5000/user')
    .type('form')
    .send({'name':'three'})
    .end(function (err,req) {
        if(req.ok){
            console.log("gogg "+req.text);
        }
        else{
            console.log('Ops'+req.text);
        }
    })