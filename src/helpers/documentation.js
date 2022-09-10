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

const swaggerDocumentation = {
    openapi: '3.0.0',
    info: {
        title: 'A2D Library API',
        version: '1.0.0',
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
        "/auth/changepassword" : {
            post: {
                tags: ['Authentication APIs'],
                summary: 'Change password of a user',
                description: 'Change password of a user',
                operationId: 'changepassword',
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
                responses: responses,
                parameters: [
                    {
                        name: 'Authorization',
                        in: 'header',
                        description: 'Authorization token',
                        required: true,
                        type: 'string',
                        example: 'Bearer <token>'
                    },
                ]
            }
        }
    },
};

module.exports = swaggerDocumentation;