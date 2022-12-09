import express from "express";
const router = express.Router();
import getMovies from "../Models/moviesmodels.js";

router.get("/", async (req, res) => {
  console.log("test")
  const data = await getMovies();
  res.json({ success: true, payload: data });
});

export default router;
