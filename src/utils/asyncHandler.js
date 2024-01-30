// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((error) => {
//       next(error);
//     });
//   };
// };
// -------------- other method----------

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    return fn(req, res, next);
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ messsage: error.message, success: false });
  }
};
export { asyncHandler };
