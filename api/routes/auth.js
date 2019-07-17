const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const db = require('../models');

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await db.users.findOne({where: { email: req.body.email }});
  if (!user) {
    return res.status(400).send('Invalid email or password');
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send('Invalid email or password');
  }

  const token = jwt.sign({id: user.id}, process.env.JWT_PRIVATE_KEY);
  const body = _.pick(user, ['id', 'name', 'email']);
  res.header('x-auth-token', token).send(body);
});

function validate(payload) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(payload, schema);
}

module.exports = router;