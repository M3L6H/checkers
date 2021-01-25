import dotenv from "dotenv";
import express from "express";
import path from "path";

// Initialize configuration
dotenv.config();

const app = express();
const port = 8080;

if (process.env.NODE_ENV === "development") {
  // Set up livereload middleware
  // eslint-disable-next-line
  const livereload = require("livereload");
  const liveReloadServer = livereload.createServer();
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  
  // eslint-disable-next-line
  const connectLivereload = require("connect-livereload");
  app.use(connectLivereload());
}

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Route handler for home page
app.get("/", (_req, res) => {
  res.render("index");
});

process.on("SIGINT", () => process.exit());

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`server started at http://localhost:${ port }`);
});
