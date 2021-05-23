
const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters long.');
  }
  if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)) {
    return helpers.message('password must contain both lowercase and uppercase letters, and numbers ');
  }
  return value;
};

module.exports = Object.freeze({
  password
});
