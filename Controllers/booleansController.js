const { negate, truthiness, isOdd, startsWith, isSquare } = require('../src/lib/booleans');

exports.booleans_negate = (req, res) => {
  const boolean = req.body.value;
  const responseObject = negate(boolean);
  res.status(200).json({ result: responseObject });
};

exports.booleans_truthiness = (req, res) => {
  const boolean = req.body.value;
  const responseObject = truthiness(boolean);
  res.status(200).json({ result: responseObject });
};


exports.booleans_isOdd = (req, res) => {
  const number = req.params.number;
  const responseObject = isOdd(number);
  if (isNaN(number) === true) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: responseObject });
  }
};

exports.booleans_startsWith = (req, res) => {
  const myString = 'cat';
  const string = req.params.string;
  const responseObject = startsWith(string, myString);
  if (string.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' })
  } else {
    res.status(200).json({ result: responseObject });
  }
};

exports.booleans_squared = (req, res) => {
  const myNumber = Number(req.body.value);
  const responseObject = isSquare(myNumber);
  return Number.isNaN(myNumber)
    ? res.status(400).send({ error: 'Parameter must be a number.'})
    : res.status(200).json({ result: responseObject });
};