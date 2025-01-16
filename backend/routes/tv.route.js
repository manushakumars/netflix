import express from "express";
import {
  getTrendingTv,
  getTvTrailers,
  getTvDetails,
  getSimilarTvs,
  getTvsByCategory
} from "../controllers/tv.controller.js";

const tvRoutes = express.Router();

tvRoutes.get("/trending", getTrendingTv);
tvRoutes.get("/:id/trailers", getTvTrailers);
tvRoutes.get("/:id/details", getTvDetails);
tvRoutes.get("/:id/similar", getSimilarTvs);
tvRoutes.get("/:category", getTvsByCategory);

export default tvRoutes;
