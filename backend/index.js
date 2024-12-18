import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import bodyParser from "body-parser";

const app = express();
const PORT = ENV_VARS.PORT;
app.use(bodyParser.json()); // Parses JSON requests

app.use(express.json()); // will allow us to parse req.body

app.use("/api/auth", authRoutes);
app.use("/api/movie", movieRoutes);

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
  connectDB();
});
