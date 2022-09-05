const Quote = require('../models/quoteModel');
const catchAsync = require('../middleware/catchAsync');
const filterObject = require('../utils/filterObject');
const AppError = require('../utils/AppError');

exports.getAllQuotes = catchAsync(async (req, res, next) => {
    const quotes = await Quote.find();

    res.status(200).json({
        status: 'success',
        data: quotes
    });
});

exports.saveQuote = catchAsync(async (req, res, next) => {
    const quote = await Quote.create(
        filterObject(req.body, 'content', 'author')
    );

    res.status(201).json({
        status: 'success',
        data: quote
    });
});

exports.favoriteQuote = catchAsync(async (req, res, next) => {
    const quote = await Quote.findByIdAndUpdate(
        req.params.id,
        {
            favorited: true
        },
        { new: true }
    );

    if (!quote) return next(new AppError('Quote not found.', 404));

    res.status(200).json({
        status: 'success',
        data: quote
    });
});

exports.unfavoriteQuote = catchAsync(async (req, res, next) => {
    const quote = await Quote.findByIdAndUpdate(
        req.params.id,
        {
            favorited: false
        },
        { new: true }
    );

    if (!quote) return next(new AppError('Quote not found.', 404));

    res.status(200).json({
        status: 'success',
        data: quote
    });
});

exports.deleteQuote = catchAsync(async (req, res, next) => {
    const quote = await Quote.findByIdAndDelete(req.params.id);

    if (!quote) return next(new AppError('Quote not found.', 404));

    res.status(204).json({
        status: 'success',
        data: quote
    });
});
