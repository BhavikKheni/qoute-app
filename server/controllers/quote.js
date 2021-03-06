import Quote from "../models/Quote";
const _ = require("lodash");
import fs from "fs";

export function create(req, res) {
    let quote = new Quote();

    quote = _.assign(quote, req.body);

    quote.save(function(err, quote) {
        if (err) {
            console.log("Error: " + err);
        }
        return res.json({ quote: quote });
    });
}
export function list(req, res, next) {
  return Quote.find().exec((err, quotes) => {
    if (err) return next(err);
    if (quotes) {
      return res.json(quotes);
    }
  });
}