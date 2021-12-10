// eslint-disable-next-line no-unused-vars
const db = require('../models');

const signin = (req, res) => {
  res.json({ message: 'signin' });
};

const signup = (req, res) => {
  res.json({ message: 'signup' });
};

module.exports = { signin, signup };
