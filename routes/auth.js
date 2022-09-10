const router = require("express").Router();
const authController = require("../controllers/auth");
const {usernameValidation,passwordValidation} = require("../utils/validators");

/**
 * @swagger
 * /auth/register:
 *  post:
 *     summary: Register a new user
 *     tags: [Auth API's]
 *     description: Register a new user
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: user
 *        description: The user to create.
 *        schema:
 *         type: object
 *         required:
 *          - username
 *          - password
 *        properties:
 *         username:
 *          type: string
 *         password:
 *          type: string
 *        responses:
 *           '200':
 *               description: A successful response
 *           '400':
 *               description: Bad Request
 *           '500':
 *               description: Internal Server Error
*/
router.post("/register",usernameValidation,passwordValidation,authController.register);

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login a user
 *    tags: [Auth API's]
 *    description: Login a user
 *    consumes:
 *     - application/json
 *    parameters:
 *     - in: body
 *       name: user
 *       description: The user to login.
 *       schema:
 *        type: object
 *        required:
 *         - username
 *         - password
 *        properties:
 *         username:
 *          type: string
 *         password:
 *          type: string
 *        responses:
 *          '200':
 *             description: A successful response
 *          '400':
 *             description: Bad Request
 *          '500':
 *             description: Internal Server Error
*/
router.post("/login",usernameValidation,passwordValidation,authController.login);

router.post("/changepassword",passwordValidation,authController.changePassword);

module.exports = router;