import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;
//   console.log(token);
//   if (!token) return next(createError(401, "You are not authenticated!"));

//   //verify token, if valid send user info
//   jwt.verify(token, process.env.JWT, (err, user) => {
//     if (err) return next(createError(403, "Token is not valid!"));
//     req.user = user;
//     //next() will continue back to the api req
//     next();
//   });
// };

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) res.sendStatus(401);

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
