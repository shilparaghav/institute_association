var express = require('express');
var router = express.Router();

var feesCtrl = require('../controllers/fees-controller');



router.get('/', [
    feesCtrl.fetchAll
]);

router.get('/:id', [
    feesCtrl.fetchById
]);

router.post('/', [
    feesCtrl.insert
]);

router.put('/:id', [
    feesCtrl.update
]);

router.delete('/:id', [
    feesCtrl.hardDelete
]);

router.delete("/softdelete/:1d", [
    feesCtrl.softDelete
]);

module.exports = router;
