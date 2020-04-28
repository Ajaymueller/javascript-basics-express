const {
  getNthElement,
  arrayToCSVString,
  elementsStartingWithAVowel,
  removeNthElement2,
  addToArray2,
} = require('../src/lib/arrays');

exports.arrays_getElement = (req, res) => {
  const n = 2;
  const responseObject = getNthElement(n, req.body.array);
  res.status(200).json({ result: responseObject });
};

exports.arrays_toString = (req, res) => {
  const responseObject = arrayToCSVString(req.body.array);
  res.status(200).json({ result: responseObject });
};

exports.arrays_append = (req, res) => {
  const element = req.body.value;
  const myArray = req.body.array;
  const responseObject = addToArray2(element, myArray);
  res.status(200).json({ result: responseObject });
};

exports.arrays_append2 = (req, res) => {
  const responseObject = elementsStartingWithAVowel(req.body.array);
  res.status(200).json({ result: responseObject });
};

exports.arrays_removeElement = (req, res) => {
  const index = Number(req.query.index);
  const responseObject = index
    ? removeNthElement2(index, req.body.array)
    : removeNthElement2(0, req.body.array);

  res.status(200).json({ result: responseObject });
};

exports.arrays_elementsStartingWithAVowel = (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
};