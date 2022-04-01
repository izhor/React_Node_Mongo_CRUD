const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: String, required: true},
    },
    { collection: "bookCollection" }
);

module.exports = mongoose.model("BookModel", BookSchema);