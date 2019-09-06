// Headline Model
// ==============

// Mongoose
var mongoose = require("mongoose");

// Mongoose Schema Method
var Schema = mongoose.Schema;

// Headline Schema
var headlineSchema = new Schema({
  // Headline
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },

// Summary
  summary: {
    type: String,
    required: true
  },

  // Link
  url: {
    type: String,
    required: true
  },
  
// Date
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create Headline From Schema
var Headline = mongoose.model("Headline", headlineSchema);

// Headline Modal Export
module.exports = Headline;
