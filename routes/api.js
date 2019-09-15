var express = require('express');
var router = express.Router();
const DB = require('../modules/DB')
const DBSmp = new DB()

/* GET home page. */
router.get('/', async (req, res, next) => {

  res.json({
    message: 'Helloooo'
  });
});

router.get('/users', async (req, res, next) => {
  let data = await DBSmp.read()

  res.json(
    data
  );
});


router.delete('/users/:id', async (req, res, next) => {
  const data = await DBSmp.delete(req.params.id)
  res.json(
    data
  );
});


module.exports = router;