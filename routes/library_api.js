const express = require('express');

const router = express.Router();
const libraryController = require('../controllers/library');

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