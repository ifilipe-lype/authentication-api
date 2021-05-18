const Joi = require("joi");
const validate = require("./validate");
const { password } = require("./custom.validation");

const createUser = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().custom(password),
});

module.exports = Object.freeze({
  create: (userData) => validate(createUser, userData),
});
