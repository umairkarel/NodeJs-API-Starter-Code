import { createLogger, transports, format, addColors } from "winston";
import { formatDate } from "./format-date.js";

const customLevelColors = {
  error: "red",
  warn: "yellow",
  info: "blue",
  http: "green",
  debug: "orange",
};

addColors(customLevelColors);

const customLoggerFormat = format.combine(
  format.timestamp(),
  format.printf((data) => {
    return `${formatDate(data.timestamp)} | [${data.level.toUpperCase()}] | ${
      data.message
    }`;
  }),
  format.colorize({ all: true }),
);

let logger;

/* eslint-disable no-undef */
logger = createLogger({
  format: customLoggerFormat,
  transports: [
    new transports.Console({
      level: "debug",
      silent: process.env.NODE_ENV === "prod",
    }),
  ],
});

export default logger;
