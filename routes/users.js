var express = require('express');
var router = express.Router();
const DB = require('../modules/DB')
const DBSmp = new DB()


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const data = await DBSmp.read()
  
  res.render('users', {
    data: data
  });
});

module.exports = router;