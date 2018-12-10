var express = require('express');
var router = express.Router();

var userCtrl = require('../controllers/user-controller');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getall', [
  userCtrl.fetchAll
]);

router.get('/get/:id', [
  userCtrl.fetchById
]);

router.post('/save', [
  userCtrl.insert
]);

router.post('/update/:id', [
  userCtrl.update
]);

router.delete('/harddelete/:id', [
  userCtrl.hardDelete
]);

router.delete("/softdelete/:1d", [
  userCtrl.softDelete
]);

module.exports = router;
// test