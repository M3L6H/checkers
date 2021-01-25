import dotenv from "dotenv";
import express from "express";
import path from "path";
import { setupLivereload } from "./middleware";
import * as routes from "./routes";

// Initialize configuration
dotenv.config();

const app = express();

// Use livereload if in development
if (process.env.NODE_ENV === "development") setupLivereload(app);

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Configure routes
routes.home(app);

// Exit when SIGINT is received
process.on("SIGINT", () => process.exit());

// Start server
app.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line
  console.log(`server started at http://localhost:${ process.env.SERVER_PORT }`);
});
