// create dummy data of 100 books with bookName, authorName, bookGenre, bookPrice

const faker = require('faker');

const dummyBooks = [
    {
        bookName: "The Lord of the Rings",
        authorName: "J. R. R. Tolkien",
        bookGenre: "Fantasy",
        bookPrice: 100
    },
    {
        bookName: "The Hitchhiker's Guide to the Galaxy",
        authorName: "Douglas Adams",
        bookGenre: "Science Fiction",
        bookPrice: 200
    },
    {
        bookName: "The Hobbit",
        authorName: "J. R. R. Tolkien",
        bookGenre: "Fantasy",
        bookPrice: 300
    },
    {
        bookName: "The Restaurant at the End of the Universe",
        authorName: "Douglas Adams",
        bookGenre: "Science Fiction",
        bookPrice: 400
    },
    {
        bookName: "Life, the Universe and Everything",
        authorName: "Douglas Adams",
        bookGenre: "Science Fiction",
        bookPrice: 500
    },
    {
        bookName: "So Long, and Thanks for All the Fish",
        authorName: "Douglas Adams",
        bookGenre: "Science Fiction",
        bookPrice: 600
    },
    
    // some schools books dummy data
    {
        bookName: "The School for Good and Evil",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 700
    },
    {
        bookName: "The School for Good and Evil: The Last Ever After",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 800
    },

    // get 1000 books dummy data
    {
        bookName: "The School for Good and Evil",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 700
    },
    {
        bookName: "The School for Good and Evil: The Last Ever After",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 800
    },
    {
        bookName: "The School for Good and Evil",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 700
    },
    {
        bookName: "The School for Good and Evil: The Last Ever After",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 800
    },
    {
        bookName: "The School for Good and Evil",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 700
    },
    {
        bookName: "The School for Good and Evil: The Last Ever After",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 800
    },
    {
        bookName: "The School for Good and Evil",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 700
    },
    {
        bookName: "The School for Good and Evil: The Last Ever After",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 800
    },
    {
        bookName: "The School for Good and Evil",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 700
    },
    {
        bookName: "The School for Good and Evil: The Last Ever After",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 800
    },
    {
        bookName: "The School for Good and Evil",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 700
    },
    {
        bookName: "The School for Good and Evil: The Last Ever After",
        authorName: "Soman Chainani",
        bookGenre: "Fantasy",
        bookPrice: 800
    },

    // some more dummy data


]


// push dummy data to dummyBooks using faker
for (let i = 0; i < 100; i++) {
    dummyBooks.push({
        bookName: faker.name.title(),
        authorName: faker.name.findName(),
        bookGenre: faker.name.jobType(),
        bookPrice: faker.datatype.number()
    })
}

module.exports = dummyBooks;