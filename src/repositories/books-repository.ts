import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database";

export async function getBooks() {
  const result = await prisma.books.findMany()
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.books.findUnique({
    where: { id }
  })
  return result;
}

export async function createBook(book: CreateBook) {
  return await prisma.books.create({
    data: book
  })
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  return await prisma.books.update({
    data: { grade, review },
    where: { id: bookId }
  })
}