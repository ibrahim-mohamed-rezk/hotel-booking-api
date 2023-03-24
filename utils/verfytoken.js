import { createError } from "./error.js";
import jwt from "jsonwebtoken";

//verfy token
export const verfyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "you are not authenticated!"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "token is not valid"));
    req.user = user;
    next();
  });
};

//verfy user
export const verfyUser = (req, res, next) => {
  verfyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};

//verfy admin
export const verfyAdmin = (req, res, next) => {
  verfyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};
