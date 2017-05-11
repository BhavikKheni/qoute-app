/* eslint no-process-exit: 0 */

import mongoose from "mongoose";
import config from "./config";

import path from "path";
import glob from "glob";

const noop = () => {};

function gracefulKill(signal = "SIGUSR2") {
  return function () {
    mongoose.connection.close(() => process.kill(process.pid, signal));
  };
}

// If the Node process ends, close the Mongoose connection
["SIGINT", "SIGTERM", "SIGUSR2"].forEach(signal => process.once(signal, gracefulKill(signal)));

export default function (done) {

  done = done || noop;

  let db = mongoose.connect(config.database.url, config.database.options, (err) => {
    if (err) {
      return done(err);
    }
    return done(false, db);
  });

  // load schema
  glob.sync(__dirname + "/../models/**/*.js").forEach(file => require(path.resolve(file)));

  return db;
}