import express from "express";
import logger from "morgan";
import cors from "cors";
import moviesRouter from "./Routes/moviesroutes.js";
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/movies", moviesRouter);

app.listen(PORT, function () {
   console.log(`Server is listening on http://localhost:${PORT}`);
 });

export default app;