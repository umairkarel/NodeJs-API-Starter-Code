import express from "express";
// should import it after express
import "express-async-errors";
import cookieSession from "cookie-session";
import { config } from "dotenv";
import { ErrorMiddleware } from "./middlewares/error.js";
import ErrorHandler from "./utils/error-handler.js";
import { ErrorMessages, HTTP_STATUS_CODE } from "./constants/errors.js";
import userRouter from "./routes/user.routes.js";

// Set .env file path
config({
  path: ".env",
  encoding: "utf-8",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* eslint-disable no-undef */
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV === "production",
  }),
);

// All your Router's goes here
app.use("/api/users", userRouter);
app.all("*", () => {
  // not found route
  // app.all represents GET, POST, PUT, PATCH, etc.
  throw new ErrorHandler(
    ErrorMessages.ResourceNotFound,
    HTTP_STATUS_CODE.NotFound,
  );
});

app.use(ErrorMiddleware);

export default app;
