import ErrorHandler from "../utils/error-handler.js";
import { ErrorMessages } from "../constants/errors.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

/**
 * isAuthenticatedUser - Checks for logged in users.
 */
export const isAuthenticatedUser = async (req, res, next) => {
  const token = await req.session?.jwt;

  if (!token)
    return next(new ErrorHandler(`${ErrorMessages.LoginRequired}`, 401));

  /* eslint-disable no-undef */
  const decodedToken = jwt.verify(token, process.env.JWT_SALT);

  // Check if token has expired
  const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
  if (decodedToken.exp < currentTime) {
    return next(new ErrorHandler(`${ErrorMessages.TokenExpired}`, 401));
  }

  req.user = await User.findById(decodedToken.id);

  if (!req.user) {
    return next(new ErrorHandler(`${ErrorMessages.Unauthorised}`, 401));
  }

  next();
};
