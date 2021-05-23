const Joi = require("joi");
const AppError = require("../AppError");

function validate(schema, data){
  const { value, error } = Joi.compile(schema)
    .prefs({ errors: { label: "key" } })
    .validate(data);

    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(", ");
  
      throw new AppError(errorMessage);
    }
  
    return value;
}

module.exports = validate;
