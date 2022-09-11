const responses = {
    200: {
        description: 'Password changed successfully',
    },
    400: {
        description: 'Bad Request',
    },
    500: {
        description: 'Internal Server Error',
    },
};

const security = [
    {
        bearerAuth: []
    },
];

const swaggerDocumentation = {
    openapi: '3.0.0',
    info: {
        title: 'A2D Library API',
        version: '1.0.0',
    },

    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },



    servers: [
        {
            url: 'http://localhost:5000/',
            description: 'Local server',
        },
    ],

    paths: {
        "/auth/register": {
            post: {
                tags: ['Authentication APIs'],
                summary: 'Register a new user',
                description: 'Register a new user',
                operationId: 'register',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    username: {
                                        type: 'string',
                                        description: 'Username of the user',
                                        required: true,
                                    },
                                    password: {
                                        type: 'string',
                                        description: 'Password of the user',
                                        required: true,
                                    },
                                }

                            }
                        }
                    }
                },
                responses: responses
            }
        },
        "/auth/login": {
            post: {
                tags: ['Authentication APIs'],
                summary: 'Login a user',
                description: 'Login a user',
                operationId: 'login',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    username: {
                                        type: 'string',
                                        description: 'Username of the user',
                                        required: true,
                                    },
                                    password: {
                                        type: 'string',
                                        description: 'Password of the user',
                                        required: true,
                                    },
                                }
                            }
                        }
                    }
                },
                responses: responses
            }
        },
        "/auth/changepassword": {
            post: {
                tags: ['Authentication APIs'],
                summary: 'Change password of a user',
                description: 'Change password of a user',
                operationId: 'changepassword',
                security: security,
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    password: {
                                        type: 'string',
                                        description: 'Password of the user',
                                        required: true,
                                    },
                                }
                            }
                        }
                    }
                },
                responses: responses
            }
        },
        "/api/v1/library/totalbooks": {
            get: {
                tags: ['Library APIs'],
                summary: 'Get total number of books in library',
                description: 'Returns the count of all Books in the Library',
                operationId: 'getAllBooksCount',
                security: security,
                responses: responses,
            }
        },
        "/api/v1/library/addbook": {
            post: {
                tags: ['Library APIs'],
                summary: 'Add a new book to the library',
                description: 'Add a new book to the library',
                operationId: 'addBook',
                security: security,
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    bookName: {
                                        type: 'string',
                                        description: 'Name of the book',
                                        required: true,
                                    },
                                    authorName: {
                                        type: 'string',
                                        description: 'Name of the author',
                                        required: true,
                                    },
                                    bookGenre: {
                                        type: 'string',
                                        description: 'Genre of the book',
                                        required: true,
                                    },
                                    bookPrice: {
                                        type: 'string',
                                        description: 'Genre of the book',
                                        required: true,
                                    },
                                }
                            }
                        }
                    }
                },
                responses: responses,
            }
        },
        "/api/v1/library/updatebook": {
            put: {
                tags: ['Library APIs'],
                summary: 'Update a book in the library',
                description: 'Update a book in the library',
                operationId: 'updateBook',
                security: security,
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    bookId: {
                                        type: 'string',
                                        description: 'Id of the book',
                                        required: true,
                                    },
                                    bookName: {
                                        type: 'string',
                                        description: 'Name of the book',
                                    },
                                    authorName: {
                                        type: 'string',
                                        description: 'Name of the author',
                                    },
                                    bookPrice: {
                                        type: 'string',
                                        description: 'Genre of the book',
                                    },
                                    bookGenre: {
                                        type: 'string',
                                        description: 'Genre of the book',
                                    },
                                }
                            }
                        }
                    }
                }
            }

        },
        "/api/v1/library/deletebook/{bookId}": {
            delete: {
                tags: ['Library APIs'],
                summary: 'Delete a book from the library',
                description: 'Delete a book from the library',
                operationId: 'deleteBook',
                security: security,
                parameters: [
                    {
                        name: 'bookId',
                        in: 'path',
                        description: 'Id of the book',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: responses,
            }
        },
        "/api/v1/library/getallbooks": {
            get: {
                tags: ['Library APIs'],
                summary: 'Get all books in the library',
                description: 'Get all books in the library',
                operationId: 'getAllBooks',
                security: security,
                parameters: [
                    {
                        name: 'page',
                        in: 'query',
                        description: 'Page number',
                        required: true,
                        schema: {
                            type: 'integer',
                        },
                    },
                    {
                        name: 'limit',
                        in: 'query',
                        description: 'Limit of books per page',
                        required: true,
                        schema: {
                            type: 'integer',
                        },
                    },
                ],
                responses: responses,
            }
        },
        "/api/v1/library/getbook/{bookId}": {
            get: {
                tags: ['Library APIs'],
                summary: 'Get a book in the library',
                description: 'Get a book in the library',
                operationId: 'getBook',
                security: security,
                parameters: [
                    {
                        name: 'bookId',
                        in: 'path',
                        description: 'Id of the book',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: responses,
            }
        },
        "/api/v1/library/searchbook": {
            get: {
                tags: ['Library APIs'],
                summary: 'Search a book in the library',
                description: 'Search a book in the library',
                operationId: 'searchBook',
                security: security,
                parameters: [
                    {
                        name: 'bookName',
                        in: 'query',
                        description: 'Name of the book',
                        required: false,
                        schema: {
                            type: 'string',
                        },
                    },
                    {
                        name: 'authorName',
                        in: 'query',
                        description: 'Name of the author',
                        required: false,
                        schema: {
                            type: 'string',
                        },
                    },
                    {
                        name: 'bookGenre',
                        in: 'query',
                        description: 'Genre of the book',
                        required: false,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: responses,
            }
        },
        "/api/v1/library/search": {
            get: {
                tags: ['Library APIs'],
                summary: 'Fuzzy Search a book in the library',
                description: 'Fuzzy Search a book in the library',
                operationId: 'fuzzySearchBook',
                security: security,
                parameters: [
                    {
                        name: 'search',
                        in: 'query',
                        description: 'Search string',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: responses,
            }
        },
        "/api/v1/library/issuebook/{bookId}": {
            put: {
                tags: ['Library APIs'],
                summary: 'Issue a book from the library',
                description: 'Issue a book from the library',
                operationId: 'issueBook',
                security: security,
                parameters: [
                    {
                        name: 'bookId',
                        in: 'path',
                        description: 'Id of the book',
                        required: true,

                    }
                ],
                responses: responses,
            }
        },
        "/api/v1/library/returnbook/{bookId}": {
            put: {
                tags: ['Library APIs'],
                summary: 'Return a book to the library',
                description: 'Return a book to the library',
                operationId: 'returnBook',
                security: security,
                parameters: [
                    {
                        name: 'bookId',
                        in: 'path',
                        description: 'Id of the book',
                        required: true,

                    }
                ],
                responses: responses,
            }
        },
        "/api/v1/library/getissuedbooks": {
            get: {
                tags: ['Library APIs'],
                summary: 'Get all issued books in the library',
                description: 'Get all issued books in the library',
                operationId: 'getIssuedBooks',
                security: security,
                responses: responses,
            }
        },
        "/api/v1/library/getissuedbookscount": {
            get: {
                tags: ['Library APIs'],
                summary: 'Get count of all issued books in the library',
                description: 'Get count of all issued books in the library',
                operationId: 'getIssuedBooksCount',
                security: security,
                responses: responses,
            }
        }
    }
};

module.exports = swaggerDocumentation;