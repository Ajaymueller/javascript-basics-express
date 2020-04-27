/* eslint-disable prefer-destructuring */
const express = require('express');
const stringsController = require('../Controllers/stringsController');

const router = express.Router();

router.get('/hello/:string', stringsController.strings_sayHello);

router.get('/upper/:string', stringsController.strings_upperCase);

router.get('/lower/:string', stringsController.strings_lowerCase);

router.get('/first-characters/:string', stringsController.strings_firstCharacters);

module.exports = router;
