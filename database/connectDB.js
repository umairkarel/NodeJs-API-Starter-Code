import mongoose from "mongoose";
import logger from "../utils/logger.js";
import { ServerMessages } from "../constants/messages.js";
import { DEFAULT_DB_NAME } from "../constants/app-constants.js";

/**
 * connectDB - Connect to MongoDB URI
 */
export const connectDB = async () => {
  /* eslint-disable no-undef */
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME || DEFAULT_DB_NAME,
  });
  logger.info(`${ServerMessages.DatabaseConnected}: ${connection.host}`);
};
