// A custom Error for distinguish Application's errors from programmers errors.
class AppError extends Error {
  constructor(message, isOperational = true, stack = "") {
    super(message);
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = AppError;
