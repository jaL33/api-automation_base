var request = require('request');

exports.authenticate = function(token, callback){
    request.get({
        url:'http://localhost:3002/api/session',
        headers: {token: token},
        json: true },
        function (err, response, body) {
            if(err){
                console.log(err);
                callback('error');
                return;
            }
            callback(body.authenticated);
    });
}
