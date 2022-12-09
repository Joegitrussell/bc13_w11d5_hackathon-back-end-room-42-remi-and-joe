import query from "../db/db.js";

async function getMovies() {
  const data = await query("SELECT * FROM movies;");
  return data.rows;
}

export default getMovies;
