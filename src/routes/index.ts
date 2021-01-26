import * as express from "express";

export const home = (app: express.Application): void => {
  app.get("/", (_req, res) => {
    res.send("Hello world\n");
  });
};
