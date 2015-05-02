var express = require('express');
var router = express.Router();
var nodemail = require('../controllers/nodemail');

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/mails', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/mails', nodemail.sendmail);

module.exports = router;
