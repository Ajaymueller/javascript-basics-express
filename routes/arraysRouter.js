const express = require('express');
const arraysController = require('../Controllers/arraysController');

const router = express.Router();

router.post('/element-at-index/2', arraysController.arrays_getElement);

router.post('/to-string', arraysController.arrays_toString);

router.post('/append', arraysController.arrays_append);

router.post('/append2', arraysController.arrays_append2);

router.post('/remove-element', arraysController.arrays_removeElement);

router.post('/starts-with-vowel', arraysController.arrays_elementsStartingWithAVowel);

module.exports = router;
