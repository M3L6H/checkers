import express from "express";
import path from "path";

const app = express();
const port = 8080;

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
