
var express = require('express');
var router = express.Router();

const message= [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date()
  },
  {
    text: "Hello World! ",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
