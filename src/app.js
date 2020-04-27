/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
const express = require('express');
const app = express();
app.use(express.json());
const {
  sayHello,
  firstCharacters,
  firstCharacter,
  uppercase,
  lowercase,
} = require('./lib/strings');
const {
  add,
  subtract,
  multiply,
  divide,
  remainder,
  roundToTen,
  returnLarger,
} = require('./lib/numbers');
const {
  getNthElement,
  arrayToCSVString,
  elementsStartingWithAVowel,
  removeNthElement2,
  addToArray2,
} = require('./lib/arrays');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
 // app is an express application - when we call the express function, it returns to us an application that we can configure
// The app object conventionally denotes the Express application


app.get('/strings/hello/:string', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const string = req.params.string;
  const responseObject = sayHello(string);
  res.status(200).json({ result: responseObject });
});

app.get('/strings/upper/:string', (req, res) => {
  const string = req.params.string;
  const responseObject = uppercase(string);
  res.status(200).json({ result: responseObject });
});

app.get('/strings/lower/:string', (req, res) => {
  const string = req.params.string;
  const responseObject = lowercase(string);
  res.status(200).json({ result: responseObject });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const string = req.params.string;
  const length = req.query.length;
  const responseObject = req.query.length
    ? firstCharacters(string, length)
    : firstCharacter(string);
 
  res.status(200).json({ result: responseObject });
});

// Numbers

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

app.post('/numbers/round', (req, res) => {
  const numberOne = Number(req.body.a);
  const numberTwo = Number(req.body.b);
  const responseObject = roundToTen(numberOne, numberTwo);
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(numberOne) === true || isNaN(numberTwo) === true) {
    res.status(400).send({ error: 'Parameters must be valid number.' });
  } else {
    res.status(200).json({ result: responseObject });
  }
});

app.post('/numbers/larger', (req, res) => {
  const numberOne = Number(req.body.a);
  const numberTwo = Number(req.body.b);
  const responseObject = returnLarger(numberOne, numberTwo);
  res.status(200).json({ result: responseObject });
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