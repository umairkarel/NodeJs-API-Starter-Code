import jwt from "jsonwebtoken";

/* eslint-disable no-undef */
export const createSession = (req, user) => {
  // Generate JWT (Synchronous)
  const userJwt = jwt.sign(
    {
      id: user.id,
    }, // payload
    process.env.JWT_SALT, // secretOrPrivateKey
    {
      expiresIn: process.env.JWT_EXPIRY,
    },
    // [options, callback]
  );

  // Store JWT on session object provided by cookie-session middleware
  req.session = { jwt: userJwt };

  //=============NOTE=============
  /*
      we will get a cookie in response which will be the base64 encoded version
      of '{ jwt: userJwt }' object. Decoding this object on https://www.base64decode.org/
      we will get the actual JWT token
    */
  //==============================
};

export const destroySession = (req) => {
  // destroying a session
  req.session = null;
};
