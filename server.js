import app from "./index.js";
import { connectDB } from "./database/connectDB.js";
import logger from "./utils/logger.js";
import {
  DEFAULT_SERVER_PORT,
  DEFAULT_SERVER_ENV,
} from "./constants/app-constants.js";

// Connect server to the database
await connectDB();

// Listening server
/* eslint-disable no-undef */
app.listen(process.env.PORT || DEFAULT_SERVER_PORT, () => {
  logger.info(
    `${process.env.NODE_ENV || DEFAULT_SERVER_ENV} server is running on port ${
      process.env.PORT || DEFAULT_SERVER_PORT
    }.`,
  );
});
