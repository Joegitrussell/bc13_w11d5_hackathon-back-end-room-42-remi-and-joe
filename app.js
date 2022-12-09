import express from "express";
import logger from "morgan";
import cors from "cors";
import moviesRouter from "./routes/moviesroutes.js";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log("testapp")
app.use("/movies", moviesRouter);

export default app;