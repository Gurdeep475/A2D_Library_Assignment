const express = require('express');

const router = express.Router();
const libraryController = require('../controllers/library');


/**
 * @swagger
 * /api/v1/library/totalbooks:
 *  get:
 *      summary: Get total number of books in library
 *      tags: [Library API's]
 *      description: Returns the count of all Books in the Library
 *      responses:
 *        '200':
 *             description: A successful response
 *        '500':
 *            description: Internal Server Error
 * 
 * 
 */
router.route('/totalbooks').get(libraryController.getAllBooksCount);
router.route('/addbook').post(libraryController.addBook);
router.route('/updatebook').put(libraryController.updateBook);
router.route('/deletebook/:bookId').delete(libraryController.deleteBook);

router.route('/getallbooks').get(libraryController.getAllBooks);
router.route('/getbook/:bookId').get(libraryController.getBook);
router.route('/searchbook').get(libraryController.searchBook);
router.route('/search').get(libraryController.search);         // performs fuzzy search on bookName, authorName, bookGenre


router.route('/issuebook/:bookId').put(libraryController.issueBook);
router.route('/returnbook/:bookId').put(libraryController.returnBook);
router.route('/getissuedbooks').get(libraryController.getIssuedBooks);
router.route('/getissuedbookscount').get(libraryController.getIssuedBooksCount);

module.exports = router;