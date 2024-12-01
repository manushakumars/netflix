import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "90d" });

  res.cookie("jwt-netflix", token, {
    maxAge: 90 * 24 * 60 * 60 * 1000, // 90 days into milliseconds
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks, make it not accessed by JS
    sameSite: "strict",
    secure: ENV_VARS.NODE_ENV !== "development"
  });

  return token;
};
