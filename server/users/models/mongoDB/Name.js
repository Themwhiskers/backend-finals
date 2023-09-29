const mongoose = require('mongoose');
const { REQ_TEXT, OP_TEXT } = require('../../helpers/userValidators');

const Name = new mongoose.Schema({
    first: REQ_TEXT,
    middle: OP_TEXT,
    last: REQ_TEXT
});

module.exports = Name;