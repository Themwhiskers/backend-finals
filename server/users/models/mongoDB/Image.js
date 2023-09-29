const mongoose = require('mongoose');
const { URL, OP_TEXT } = require('../../helpers/userValidators');

const Image = new mongoose.Schema({
    url: URL,
    alt: OP_TEXT
});

module.exports = Image;