// Note Model
// ==========

// Mongoose
var mongoose = require("mongoose");

// Mongoose Schema Method
var Schema = mongoose.Schema;

// Schema Object Note Schema
var noteSchema = new Schema({

  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },

  date: {
    type: Date,
    default: Date.now
  },

  noteText: String
});

// Note Schema Note Model
var Note = mongoose.model("Note", noteSchema);

// Note Model Export
module.exports = Note;
