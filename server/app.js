const morgan = require('morgan');
const express = require('express');
const app = express();

const quotesRoutes = require('./routes/quotesRoutes');
const globalErrorHandler = require('./middleware/globalErrorHandler');

// Log if in "development" environment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use('/api/v1/quotes', quotesRoutes);
app.use(globalErrorHandler);

module.exports = app;
