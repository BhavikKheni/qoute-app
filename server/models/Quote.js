import mongoose, { Schema } from "mongoose";

const Quote = new Schema({
  
  Name: {
    type: String,
    trim: true,
    required: "Please provide an Name",
    unique: "User already exists"
  },

  quote: {
    type: String,
    required: "Please provide a password"
  }
});

export default mongoose.model("Quote", Quote);