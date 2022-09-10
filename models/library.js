const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    bookGenre: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    },
    issueCount: {
        type: Number,
        default: 0
    },
    isIssued: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Defining Text index on bookName, authorName, bookGenre for fuzzy search
bookSchema.index({ bookName: 'text' , authorName: 'text' , bookGenre: 'text' });

module.exports = mongoose.model('Book', bookSchema);