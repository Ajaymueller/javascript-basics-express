/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
const express = require('express');

const app = express();
app.use(express.json());
const {
  getNthElement,
  arrayToCSVString,
  elementsStartingWithAVowel,
  removeNthElement2,
  addToArray2,
} = require('./lib/arrays');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const stringsRouter = require('../routes/stringsRouter');
const numbersRouter = require('../routes/numbersRouter');
 // app is an express application - when we call the express function, it returns to us an application that we can configure
// The app object conventionally denotes the Express application


app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/arrays', arraysRouter);
app.use('booleans', booleansRouter);

// Arrays

app.post('/arrays/element-at-index/2', (req, res) => {
  const n = 2;
  const responseObject = getNthElement(n, req.body.array);
  res.status(200).json({ result: responseObject });
});

app.post('/arrays/to-string', (req, res) => {
  const responseObject = arrayToCSVString(req.body.array);
  res.status(200).json({ result: responseObject });
});

app.post('/arrays/append', (req, res) => {
  const element = req.body.value;
  const myArray = req.body.array;
  const responseObject = addToArray2(element, myArray);
  res.status(200).json({ result: responseObject });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const responseObject = elementsStartingWithAVowel(req.body.array);
  res.status(200).json({ result: responseObject });
});

app.post('/arrays/remove-element', (req, res) => {
  const index = Number(req.query.index);
  const responseObject = index
    ? removeNthElement2(index, req.body.array)
    : removeNthElement2(0, req.body.array);

  res.status(200).json({ result: responseObject });
});

// Booleans

app.post('/booleans/negate', (req, res) => {
  const boolean = req.body.value;
  const responseObject = negate(boolean);
  res.status(200).json({ result: responseObject });
});

app.post('/booleans/truthiness', (req, res) => {
  const boolean = req.body.value;
  const responseObject = truthiness(boolean);
  res.status(200).json({ result: responseObject });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = req.params.number;
  const responseObject = isOdd(number);
  if (isNaN(number) === true) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: responseObject });
  }
});

app.get('/booleans/cat/starts-with/:string', (req, res) => {
  const myString = 'cat';
  const string = req.params.string;
  const responseObject = startsWith(string, myString);
  if (string.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' })
  } else {
    res.status(200).json({ result: responseObject });
  }
});

module.exports = app;

// eslint-disable-next-line spaced-comment
/*on app object, we can call functions that creates roots */