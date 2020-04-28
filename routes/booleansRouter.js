const express = require('express');
const booleansController = require('../Controllers/booleansController');

const router = express.Router();

router.post('/negate', booleansController.booleans_negate);

router.post('/truthiness', booleansController.booleans_truthiness);

router.get('/is-odd/:number', booleansController.booleans_isOdd);

router.get('/cat/starts-with/:string', booleansController.booleans_startsWith);

module.exports = router;
