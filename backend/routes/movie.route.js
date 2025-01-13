import express from "express";
import {
  getMovieTrailers,
  getTrendingMovie,
  getMovieDetails
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);

export default router;
