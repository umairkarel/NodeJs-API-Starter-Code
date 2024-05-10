import ErrorHandler from "../utils/error-handler.js";
import logger from "../utils/logger.js";

/**
 * Middleware for handling all errors
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
// eslint-disable-next-line no-unused-vars
export const ErrorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error.";

  // Wrong mongoDB Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  logger.error(`${err.statusCode} | ${err.message}`);

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
