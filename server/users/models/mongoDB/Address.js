const mongoose = require('mongoose');
const { OP_TEXT, REQ_TEXT } = require('../../helpers/userValidators');

const Address = new mongoose.Schema({
    state: OP_TEXT,
    country: REQ_TEXT,
    city: REQ_TEXT,
    street: REQ_TEXT,
    houseNumber: REQ_TEXT,
    zip: {
        type: Number,
        trim: true,
        minLength: 4,
        default: 'Geo-Location is not available at this moment'
    }
});

module.exports = Address;