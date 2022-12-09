import express from "express";
import logger from "morgan";
//import cors from "cors";
const PORT = process.env.PORT;
import moviesRouter from "./routes/moviesroutes.js";

const app = express();

//app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", moviesRouter);

app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

export default app;
