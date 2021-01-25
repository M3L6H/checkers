import dotenv from "dotenv";
import express from "express";
import path from "path";
import { setupLivereload } from "./middleware";

// Initialize configuration
dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") setupLivereload(app);

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Route handler for home page
app.get("/", (_req, res) => {
  res.render("index");
});

process.on("SIGINT", () => process.exit());

app.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line
  console.log(`server started at http://localhost:${ process.env.SERVER_PORT }`);
});
