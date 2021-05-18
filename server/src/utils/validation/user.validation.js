const Joi = require("joi");
const validate = require("./validate");
const { password, url, phone } = require("./custom.validation");

const createUser = Joi.object().keys({
  photo: Joi.string(),
  name: Joi.string().required(),
  bio: Joi.string(),
  email: Joi.string().required().email(),
  phone: Joi.string(),
  password: Joi.string().required().custom(password),
});

module.exports = Object.freeze({
  create: (userData) => validate(createUser, userData),
});
