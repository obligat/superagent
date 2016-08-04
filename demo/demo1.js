
const request=require('superagent');

request
    .post('localhost:3000/user')
    .query({ 'input': 'Manny' })
    /*.set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
   */ .end(function(err, res){
        if (res.ok) {
            console.log('Yes  '+res.text);
        } else {
            console.log('No ' + res.text);
        }
    });
/*request.post('localhost:3000/user')
    .query({"name":"tj"})
    .end(console.log(name.body));*/

