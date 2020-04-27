/* eslint-disable prefer-destructuring */
const {
  sayHello,
  firstCharacters,
  firstCharacter,
  uppercase,
  lowercase,
} = require('../src/lib/strings');

exports.strings_sayHello = (req, res) => {
  const string = req.params.string;
  const responseObject = sayHello(string);
  res.status(200).json({ result: responseObject });
};

exports.strings_upperCase = (req, res) => {
  const string = req.params.string;
  const responseObject = uppercase(string);
  res.status(200).json({ result: responseObject });
};

exports.strings_lowerCase = (req, res) => {
  const string = req.params.string;
  const responseObject = lowercase(string);
  res.status(200).json({ result: responseObject });
};

exports.strings_firstCharacters = (req, res) => {
  const string = req.params.string;
  const length = req.query.length;
  const responseObject = req.query.length
    ? firstCharacters(string, length)
    : firstCharacter(string);

  res.status(200).json({ result: responseObject });
};
