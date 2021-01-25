import express from "express";

const app = express();
const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello world!");
});

process.on("SIGINT", () => process.exit());

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`server started at http://localhost:${ port }`);
});
