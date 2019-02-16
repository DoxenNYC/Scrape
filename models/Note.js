var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  review: {
    type: Schema.Types.ObjectId,
    ref: "Review"
    // required: true
  }
});

var Note = mongoose.model("Note", NoteSchema);

// ----- Exporting the Note model
module.exports = Note;
