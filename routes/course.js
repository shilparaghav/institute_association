var express = require('express');
var router = express.Router();

var courseCtrl = require('../controllers/course-controller');

router.get('/', [
    courseCtrl.fetchAll
]);

router.get('/:id', [
    courseCtrl.fetchById
]);

router.post('/', [
    courseCtrl.insert
]);

router.put('/:id', [
    courseCtrl.update
]);

router.delete('/:id', [
    courseCtrl.hardDelete
]);

router.delete("/softdelete/:1d", [
    courseCtrl.softDelete
]);

module.exports = router;
