import http from "http";

import config from "./config/config";
import app from "./config/express";
import routes from "./routes";
import mongodb from "./config/mongodb";

export function start() {

  return new Promise((resolve, reject) => {
    mongodb((err, db) => {

      if (err) {
        return reject(err);
      }

      let server = http.createServer(app);

      // save references
      app.db = db;
      app.server = server;
      app.config = config;

      // setup routes
      routes(app);

      // start server
      app.server.listen(config.server.port, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(app);
      });      
    });
  });
};
