/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
const express = require('express');
const app = express();
app.use(express.json());
const { sayHello } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');
const { divide } = require('./lib/numbers');
const { remainder } = require('./lib/numbers');
const { getNthElement } = require('./lib/arrays');
 // app is an express application - when we call the express function, it returns to us an application that we can configure
// The app object conventionally denotes the Express application

app.get('/strings/hello/:string', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const string = req.params.string;
  const responseObject = sayHello(string);
  res.status(200).json({ result: responseObject });
});

app.get('/strings/upper/hello', (req, res) => {
  res.status(200).json({ result: 'HELLO' });
});

app.get('/strings/lower/HELLO', (req, res) => {
  res.status(200).json({ result: 'hello' });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const string = req.params.string;
  const length = req.query.length;
  const responseObject = req.query.length
    ? firstCharacters(string, length)
    : firstCharacter(string);
 
  res.status(200).json({ result: responseObject });
});

app.get('/numbers/add/:firstNumber/and/:secondNumber', (req, res) => {
  const numberOne = Number(req.params.firstNumber);
  const numberTwo = Number(req.params.secondNumber);
  const responseObject = add(numberOne, numberTwo);
  return Number.isNaN(numberOne) || Number.isNaN(numberTwo)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: responseObject });
});

app.get('/numbers/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  const numberOne = Number(req.params.firstNumber);
  const numberTwo = Number(req.params.secondNumber);
  const responseObject = subtract(numberTwo, numberOne);
  return Number.isNaN(numberOne) || Number.isNaN(numberTwo)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: responseObject });
});

app.post('/numbers/multiply', (req, res) => {
  const responseObject = multiply(req.body.a, req.body.b);
  if (isNaN(req.body.a) === false && isNaN(req.body.b) === false) {
    res.status(200).json({ result: responseObject });
  }
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (req.body.a !== Number || req.body.b !== Number) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  const responseObject = divide(req.body.a, req.body.b);
  if (req.body.b === 0 || req.body.b === '0') {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (isNaN(req.body.a) === false && isNaN(req.body.b) === false) {
    res.status(200).json({ result: responseObject });
  }
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (req.body.a !== Number || req.body.b !== Number) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const numberOne = req.body.a;
  const numberTwo = req.body.b;
  const responseObject = remainder(numberOne, numberTwo);

  if (numberTwo === 0 || numberTwo === '0') {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (numberOne === undefined || numberTwo === undefined) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(numberOne) === true || isNaN(numberTwo) === true) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: responseObject });
  }
});

app.post('/arrays/element-at-index/2', (req, res) => {
  const index = req.body.array;
  const responseObject = getNthElement(index, req.body.array);
  res.status(200).json({ result: responseObject });
});

module.exports = app;

// eslint-disable-next-line spaced-comment
/*on app object, we can call functions that creates roots */