var express = require('express');
var router = express.Router();
var service = require('./sessionService');

router.post('/session', (request, response, next) => {
    service.login(request, response, next);
});

router.delete('/session', (request, response, next) => {
    service.logout(request, response, next);
});

router.get('/session', (request, response, next) => {
    service.authenticate(request, response, next);
});

// this route only exists for testing purposes!
router.post('/user', (request, response, next) => {
    service.createUser(request, response, next);
});

// this route only exists for testing purposes!
router.delete('/user', (request, response, next) => {
    service.deleteUsers(request, response, next);
});

// this route only exists for testing purposes!
router.post('/token', (request, response, next) => {
    service.createToken(request, response, next);
});

module.exports = router;
