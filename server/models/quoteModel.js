const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'The content property is required.'],
        unique: [true, 'This quote already exists.'],
        maxlength: [
            255,
            'The content cannot exceed the limit of 255 characters.'
        ]
    },
    author: {
        type: String,
        default: 'Anonymous',
        minlength: [3, 'The author must have at least 3 character.'],
        maxlength: [55, 'The author cannot exceed the limit of 55 characters.']
    },
    favorited: {
        type: Boolean,
        default: false
    }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
