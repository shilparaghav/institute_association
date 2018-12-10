var express = require('express');
var router = express.Router();

var enquiryCtrl = require('../controllers/enquiry-controller');

router.get('/', [
    enquiryCtrl.fetchAll
]);

router.get('/:id', [
    enquiryCtrl.fetchById
]);

router.post('/', [
    enquiryCtrl.insert
]);

router.put('/:id', [
    enquiryCtrl.update
]);

router.delete('/:id', [
    enquiryCtrl.softDelete
]);

router.delete("/:1d", [
    enquiryCtrl.hardDelete
]);

module.exports = router;
