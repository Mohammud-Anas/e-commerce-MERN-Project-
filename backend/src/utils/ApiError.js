class ApiError extends Error {
  constructor(
    statusCode,
    message = "SomeThing Went Wrong",
    errors = [],
    stack = "",
    success = false
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = false;

    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
