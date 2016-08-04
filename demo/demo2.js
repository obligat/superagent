/**
 * Created by dujinqiao on 16-8-3.
 */
var request=require('superagent');

request
    .post('localhost:4000/user')
    .type('form')
    .send({"input": "desc" })
    .end(
        function( err,res){
            if (res.ok) {
                console.log('Yes  '+res.text);
            } else {
                console.log('No ' + res.text);
            }
    });