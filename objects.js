/**
 * createBook
 *
 * - receives data about the book
 * - returns an object created using curly braces {}
 * that includes the following format:
 *
 * - title: "JavaScript: The Definitive Guide"
 * - author: "David Flanagan"
 * - publishedYear: 2020
 * - genre: "Programming"
 */
function createBook(title, author, publishedYear, genre) {
  // write your code here...
  return {
    title: title,
    author: author,
    publishedYear: publishedYear,
    genre: genre
  };
}

// DO NOT CHANGE THE LINE OF CODE BELOW (you can use it for testing your code)
const book = createBook();

/**
 * printBookTitleAndYear
 *
 * - receives a book object (just like the one created by `createBook`)
 * - returns the book’s title with its publish year separated by a space.
 *
 * Access the book title using dot-notation, and access the publish year using bracket-notation.
 */
function printBookTitleAndYear(book) {
  // write your code here...
  return (book.title + " " + book["publishedYear"]);
}

/**
 * addPageCount
 *
 * - receives a book object
 * - received a pageCount
 * - returns the book object with a new `pageCount` property
 */
function addPageCount(book, pageCount) {
  // write your code here...
  book.pageCount = pageCount;
  return book;
}

/**
 * addISBN
 *
 * - receives a book object
 * - receives an ISBN
 *
 * - returns the book object with a new `ISBN` property
 */
function addISBN(book, ISBN) {
  // write your code here...
  book.ISBN = ISBN;
  return book;
}

/**
 * updatePublishedYear
 *
 * - receives a book object
 * - received newYear, the new publishing year
 *
 * - returns the book object with the `publishedYear` updates
 */
function updatePublishedYear(book, newYear) {
  // write your code here...
  book.publishedYear = newYear;
  return book;
}

/**
 * addSecondAuthor
 *
 * - receives a book object
 * - receives an additional author
 *
 * - returns the book object with the `author` property changed to an array with BOTH authors
 */
function addSecondAuthor(book, additionalAuthor) {
  // write your code here...
  book.author = [book.author, additionalAuthor];
  return book;
}
/**
 * 🌶️🌶️🌶️ addReview
 *
 * - receives a book object which MIGHT have a reviews property
 * - receives a reviewer
 * - receives a comment
 *
 * Create a new review object made up of a `reviewer` and `comment`
 *  and add it to the book's reviews array
 *
 * - returns the book object with the new review included in the reviews array
 */
function addReview(book, reviewer, comment) {
  // write your code here
  if (Array.isArray(book.reviews))
    book.reviews.push({ reviewer: reviewer, comment: comment });
  else
    book.reviews = [{ reviewer: reviewer, comment: comment }];

  return book;
}

module.exports = {
  createBook,
  printBookTitleAndYear,
  addPageCount,
  addISBN,
  updatePublishedYear,
  addSecondAuthor,
  addReview,
};
