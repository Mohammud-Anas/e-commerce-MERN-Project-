class ApiResponse {
  constructor(data, statusCode, message = "success") {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    this.success = true;
  }
}

export { ApiResponse };
