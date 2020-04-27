const {
  add,
  subtract,
  multiply,
  divide,
  remainder,
  roundToTen,
  returnLarger,
} = require('../src/lib/numbers');

exports.numbers_add = (req, res) => {
  const numberOne = Number(req.params.firstNumber);
  const numberTwo = Number(req.params.secondNumber);
  const responseObject = add(numberOne, numberTwo);
  return Number.isNaN(numberOne) || Number.isNaN(numberTwo)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: responseObject });
};

exports.numbers_subtract = (req, res) => {
  const numberOne = Number(req.params.firstNumber);
  const numberTwo = Number(req.params.secondNumber);
  const responseObject = subtract(numberTwo, numberOne);
  return Number.isNaN(numberOne) || Number.isNaN(numberTwo)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: responseObject });
};

exports.numbers_multiply = (req, res) => {
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
};

exports.numbers_round = (req, res) => {
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
};

exports.numbers_larger = (req, res) => {
  const numberOne = Number(req.body.a);
  const numberTwo = Number(req.body.b);
  const responseObject = returnLarger(numberOne, numberTwo);
  res.status(200).json({ result: responseObject });
};

exports.numbers_divide = (req, res) => {
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
};

exports.numbers_remainder = (req, res) => {
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
};