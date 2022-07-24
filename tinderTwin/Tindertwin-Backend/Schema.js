const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
    name: String,
    url: String
})

const Card = new mongoose.model('Card',CardSchema);

module.exports = Card;