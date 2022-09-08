require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

mongoose
    .connect(process.env.DB.replace('<password>', process.env.DB_PASSWORD))
    .then(() => console.log('Connected to database.'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
