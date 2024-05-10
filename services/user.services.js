import { User } from "../models/user.model.js";
import logger from "../utils/logger.js";

/**
 * registerUser - Registers user
 * @param {object} payload
 * @returns {Promise}
 */
export const registerUser = async (payload) => {
  logger.info(`User Service | register user.`);
  return User.create(payload);
};

/**
 * getUserByUserId - Returns user by user id.
 * @param {number | string} userId
 * @returns {Promise}
 */
export const getUserByUserId = async (userId) => {
  logger.info(`User Service | get user by user id: ${userId}`);
  return User.findById(userId);
};

/**
 * updateUserByUserId - updates user by user id.
 * @param {number | string} userId
 * @param {Object} payload
 * @returns
 */
export const updateUserByUserId = async (userId, payload) => {
  logger.info(`User Service | update user by user id: ${userId}`);
  return User.findByIdAndUpdate(userId, payload, { new: true });
};

/**
 * deleteUserByUserId - Deletes user by user id.
 * @param {number | string} userId
 * @returns {Promise}
 */
export const deleteUserByUserId = async (userId) => {
  logger.info(`User Service | deletes user by user id: ${userId}`);
  return User.findByIdAndDelete(userId);
};

/**
 * getUserByEmail - Returns user with matching email
 * @param {string} email
 * @returns {Promise}
 */
export const getUserByEmail = async (email) => {
  logger.info(`User Service | get user by user email: ${email}`);
  return User.findOne({ email }).select("+password");
};
