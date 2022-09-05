const express = require('express');
const router = express.Router();

const quotesController = require('../controllers/quotesController');

router
    .route('/')
    .get(quotesController.getAllQuotes)
    .post(quotesController.saveQuote);

router.delete('/:id', quotesController.deleteQuote);

router
    .route('/:id/favorite')
    .post(quotesController.favoriteQuote)
    .delete(quotesController.unfavoriteQuote);

module.exports = router;
