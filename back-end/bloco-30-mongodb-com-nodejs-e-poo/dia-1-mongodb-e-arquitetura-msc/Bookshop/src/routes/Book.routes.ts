import { Router } from "express";
import BookController from "../controllers/Book.controller";

const router = Router();

const bookController = new BookController();

router
  .get('/', bookController.getBooks)
  // .post('/', bookController.create)
  // .put('/:id', bookController.updateBook)
  // .delete('/:id', bookController.deleteBook)
  // .get('/:id', bookController.getBook);

export default router;