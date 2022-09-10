// initialize express server and listen to 5000

const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const library_api = require('./routes/library_api');
const Book = require('./models/library');
const dummyBooks = require('./utils/booksDummyData');
const authRoutes = require('./routes/auth');
const { isAuthenticated } = require('./controllers/auth');
const swaggerDocumentation = require('./src/helpers/documentation');
const swaggerUI = require('swagger-ui-express');


dotEnv.config();

app.use("/documentations", swaggerUI.serve);
app.use("/documentations", swaggerUI.setup(swaggerDocumentation));

app.use(cors());
app.use(express.json());    // for parsing application/json data
app.use(express.urlencoded({ extended: true }));    // for parsing application/x-www-form-urlencoded data

app.use('/auth', authRoutes)
app.use('/api/v1/library', isAuthenticated, library_api)


app.use((req, res) => {
    res.status(404).json({ message: "Page Not Found" });
})

mongoose.connect("mongodb://localhost:27017/A2D-LMS", async () => {
    console.log('Connected to MongoDB')
    if (await Book.estimatedDocumentCount() === 0) {
        await Book.insertMany(dummyBooks);
    }
    app.listen(port, () => console.log(`Listening on port ${port}`));
});