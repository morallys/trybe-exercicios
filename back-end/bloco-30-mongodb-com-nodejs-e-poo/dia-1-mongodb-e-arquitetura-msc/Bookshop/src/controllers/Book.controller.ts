import { NextFunction, Request, Response } from 'express';
import BookService from '../services/Book.service';
import Err from '../utils/Err';

export default class BookController {
  public notFound = 'Book not found';
  public internalError = 'Internal server error';
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  public getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const books = await this.bookService.getBooks();

      if (!books) throw new Err(404, this.notFound);

      return res.status(200).json(books);
    } catch (err) {
      next(err);
    }
  };

  // public create = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const book = await this.bookService.createBook(req.body);

  //     if (!book) throw new Err(404, this.notFound);

  //     return res.status(201).send(book);
  //   } catch (err) {
  //     next(err);
  //   }
  // };

  // public getBook = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { id } = req.params;
  //     const book = await this.bookService.getBook(id);

  //     if (!book) throw new Err(404, this.notFound);

  //     return res.status(200).send(book);
  //   } catch (err) {
  //     next(err);
  //   }
  // };

  // public updateBook = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { id } = req.params;

  //     const book = await this.bookService.updateBook(id, req.body);

  //     if (!book) throw new Err(404, this.notFound);

  //     return res.status(200).send(book);
  //   } catch (err) {
  //     next(err);
  //   }
  // };

  // public deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { id } = req.params;

  //     const book = await this.bookService.deleteBook(id);

  //     if (!book) throw new Err(404, this.notFound);

  //     return res.status(200).send(book);
  //   } catch (err) {
  //     next(err);
  //   }
  // };
}

