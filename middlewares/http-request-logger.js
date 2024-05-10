import logger from "../utils/logger.js";

/**
 * Middleware for getting http request logs
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const httpRequestLogger = (req, res, next) => {
  logger.http(`Request: ${req.method} ${req.url} ${res.statusCode}`);
  next();
};
