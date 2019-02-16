var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ],
    isSaved: {
        type: Boolean,
        default: false,
        required: true
    }
});

var Review = mongoose.model("Review", ReviewSchema);

// ----- Exporting Review model
module.exports = Review;