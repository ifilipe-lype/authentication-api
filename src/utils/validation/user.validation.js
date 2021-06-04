const Joi = require("joi");
const validate = require("./validate");
const { password, url, phone } = require("./custom.validation");

const createUser = Joi.object().keys({
  name: Joi.string().required(),
  bio: Joi.string().default("").allow(""),
  photo: Joi.string().default("").allow(""),
  phone: Joi.string().default("").allow(""),
  email: Joi.string().required().email(),
  password: Joi.string().required().custom(password),
});

module.exports = Object.freeze({
  create: (userData) => validate(createUser, userData),
});
