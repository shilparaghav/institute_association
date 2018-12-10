var express = require('express');
var router = express.Router();

var admissionCtrl = require('../controllers/admission-controller');


router.get('/', [
    admissionCtrl.fetchAll
]);

router.get('/:id', [
    admissionCtrl.fetchById
]);

router.post('/', [
    admissionCtrl.insert
]);

router.put('/:id', [
    admissionCtrl.update
]);

router.delete('/:id', [
    admissionCtrl.hardDelete
]);

router.delete("/softdelete/:1d", [
    admissionCtrl.softDelete
]);

module.exports = router;
