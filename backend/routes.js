const access = require("express").Router();
const BookModel = require("./model.js");

access.route("/").get((req, res) => {
    BookModel.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error.message));
});

access.route("/delete/:id").delete((req, res) => {
    BookModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Book successfully deleted"))
    .catch((error) => res.status(400).json(error.message));
});

access.route("/update/:id").put((req, res) => {
    BookModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedBook) => res.status(200).json(updatedBook))
    .catch((err) => res.status(400).json(err.message));
});

access.route("/add").post((req, res) => {
    BookModel.create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((error) => res.status(400).json(error.message));
});
module.exports = access;