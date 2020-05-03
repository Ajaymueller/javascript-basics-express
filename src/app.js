/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join('public')));

const members = {
  id: 1,
  name: 'John',
  email: 'John@email.com',
  status: 'active',
};

app.get('/api/members', (req, res) => {
  res.json(members);
});

const stringsRouter = require('../routes/stringsRouter');
const numbersRouter = require('../routes/numbersRouter');
const booleansRouter = require('../routes/booleansRouter');
const arraysRouter = require('../routes/arraysRouter');

app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/arrays', arraysRouter);
app.use('/booleans', booleansRouter);

module.exports = app;

// eslint-disable-next-line spaced-comment
/*on app object, we can call functions that creates roots */