import express from "express";
import {
  getMovieTrailers,
  getTrendingMovie,
  getMovieDetails,
  getSimilarMovies
} from "../controllers/movie.controller.js";

const movieRoutes = express.Router();

movieRoutes.get("/trending", getTrendingMovie);
movieRoutes.get("/:id/trailers", getMovieTrailers);
movieRoutes.get("/:id/details", getMovieDetails);
movieRoutes.get("/:id/similar", getSimilarMovies);

export default movieRoutes;
