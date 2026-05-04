import express from "express";
import {
    addBook,
    findBookByAuthor,
    findBookByIsbn, findBookByPublisher,
    removeBook,
    updatedBookTitle
} from "../controller/book.controller.js";

const router = express.Router();

router.post("/book", addBook);
router.get("/book/:isbn", findBookByIsbn);
router.delete("/book/:isbn", removeBook);
router.patch("/book/:isbn/title/:title", updatedBookTitle);
router.get("/books/author/:name", findBookByAuthor);
router.get("/books/publisher/:name", findBookByPublisher);

export default router;