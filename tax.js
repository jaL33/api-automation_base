var express = require('express');
var router = express.Router();
var taxService = require('./taxService');
var idamService = require('./idamService');

router.get('/tax', (request, response, next) => {
    // if (!request.headers['token']) {
    //     response.status(401);
    //     response.send({ error: 'No token' });
    //     return;
    // }

    if (!request.query.taxableIncome) {
        response.status(400);
        response.send({ error: 'No taxable income' });
        return;
    }

    if (isNaN(request.query.taxableIncome) ||
       (request.query.taxableIncome < 0)) {
        response.status(400);
        response.send({ error: 'Invalid taxable income' });
        return;
    }

    // idamService.authenticate(request.headers['token'], function(authenticated){
    //     if(authenticated == false) {
    //         response.status(401);
    //         response.send({ error: 'Invalid token' });
    //         return;
    //     }
    //     if(authenticated == 'error') {
    //         response.status(500);
    //         response.send({ error: 'Cannot connect to login server' });
    //         return;
    //     }
         taxService.getIncomeTax(request, response, next);
    //});
});

module.exports = router;
