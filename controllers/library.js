const Book = require('../models/library');

exports.getAllBooksCount = async (_, res) => {
    try {
        const totalBooksCount = await Book.countDocuments();
        res.status(200).json({ status: "Ok", totalBooksCount: totalBooksCount });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}

exports.addBook = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ message: "Some Error Occured", error: errors });
        }
        const { bookName, authorName, bookGenre, bookPrice } = req.body;
        const book = await Book.create({
            bookName,
            authorName,
            bookGenre,
            bookPrice
        });
        res.status(200).json({ status: "Ok", book: book });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}


exports.updateBook = async (req, res) => {
    try {
        const { bookName, authorName, bookGenre, bookPrice } = req.body;

        const updateQuery = {};

        if (bookName != "" && bookName != undefined) updateQuery.bookName = bookName;
        if (authorName != "" && authorName != undefined) updateQuery.authorName = authorName;
        if (bookGenre != "" && bookGenre != undefined) updateQuery.bookGenre = bookGenre;
        if (bookPrice != "" && bookPrice != undefined) updateQuery.bookPrice = bookPrice;

        const book = await Book.findByIdAndUpdate(bookId, updateQuery, { new: true });

        res.status(200).json({ status: "Ok", book: book });

    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findByIdAndDelete(bookId);
        res.status(200).json({ status: "Ok", book: book });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}

// return a list of all books with pagination
exports.getAllBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = {};
        if (endIndex < await Book.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        results.results = await Book.find().limit(limit).skip(startIndex).exec();
        res.status(200).json({ status: "Ok", results: results });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}

exports.getBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json({ status: "Error", message: "Book Not Found" });
        res.status(200).json({ status: "Ok", book: book });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
};

// search book either by title, author or genre
exports.searchBook = async (req, res) => {
    try {
        const { bookName, author, genre } = req.query;
        const searchQuery = {};
        if (title != "" && title != undefined) searchQuery.bookName = bookName;
        if (author != "" && author != undefined) searchQuery.authorName = author;
        if (genre != "" && genre != undefined) searchQuery.bookGenre = genre;
        const books = await Book.find(searchQuery);

        return res.status(200).json({ status: "Ok", books: books });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}

exports.search = async (req, res) => {
    try {
        const { search } = req.query;
        const books = await Book.find({ $text: { $search: search } });
        return res.status(200).json({ status: "Ok", books: books });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}

exports.issueBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json({ status: "Error", message: "Book Not Found" });

        if (book.isIssued) return res.status(400).json({ status: "Error", message: "Book Already Issued" });

        book.isIssued = true;
        book.issueCount = book.issueCount + 1;
        await book.save();
        res.status(200).json({ status: "Ok", book: book });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}

exports.returnBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json({ status: "Error", message: "Book Not Found" });

        if (!book.isIssued) return res.status(400).json({ status: "Error", message: "Book Not Issued" });

        book.isIssued = false;
        await book.save();
        res.status(200).json({ status: "Ok", book: book });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}

exports.getIssuedBooks = async (req, res) => {
    try {
        const books = await Book.find({ isIssued: true });
        res.status(200).json({ status: "Ok", books: books });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}

exports.getIssuedBooksCount = async (req, res) => {
    try {
        const books = await Book.find({ isIssued: true });
        res.status(200).json({ status: "Ok", count: books.length });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
}