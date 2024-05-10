export const ErrorMessages = {
  ServerUnreachableError: "Server is not able to get requested data.",
  PleaseTryAgain: "Please try again!",
  Unauthorised: "Unauthorised!",
  UnauthorisedAccess: "You are not authorised to access this resources.",
  UserAlreadyExists: "User already exists!",
  UserNotFound: "User not found!",
  LoginRequired: "Please Login to access this resources.",
  UserAlreadyLoggedIn: "User already logged in!",
  InvalidCredentials: "Invalid credentials!",
  FieldsRequired: "Please enter all fields.",
  DataIncomplete: "Data is incomplete!",
  ResourceNotFound: "Requested resources not found!",
  TokenExpired: "Token has expired!",
};

export const HTTP_STATUS_CODE = {
  Ok: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorised: 401,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  InternalServerError: 500,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
};
