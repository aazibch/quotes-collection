const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();

const quotesRoutes = require('./routes/quotesRoutes');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const AppError = require('./utils/AppError');

// Log if in "development" environment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get(['/', '/favorites', '/new-quote'], (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });
}

app.use(express.json());
app.use('/api/v1/quotes', quotesRoutes);
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on the server.`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
