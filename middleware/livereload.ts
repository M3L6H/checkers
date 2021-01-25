import * as express from "express";

const setupLivereload = (app: express.Application) => {
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
};

export default setupLivereload;
