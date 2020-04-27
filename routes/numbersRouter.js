const express = require('express');
const numbersController = require('../Controllers/numbersController');

const router = express.Router();

router.get('/add/:firstNumber/and/:secondNumber', numbersController.numbers_add);

router.get('/subtract/:firstNumber/from/:secondNumber', numbersController.numbers_subtract);

router.post('/multiply', numbersController.numbers_multiply);

router.post('/round', numbersController.numbers_round);

router.post('/larger', numbersController.numbers_larger);

router.post('/divide', numbersController.numbers_divide);

router.post('/remainder', numbersController.numbers_remainder);

module.exports = router;
