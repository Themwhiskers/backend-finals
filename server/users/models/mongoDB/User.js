const mongoose = require('mongoose');
const Name = require('./Name');
const Address = require('./Address');
const Image = require('./Image');
const { PHONE, EMAIL, PASSWORD } = require('../../helpers/userValidators');

const schema = new mongoose.Schema({
    name: Name,
    phone: PHONE,
    email: EMAIL,
    password: PASSWORD,
    address: Address,
    image: Image,
    isAdmin: { type: Boolean, default: false},
    isBusiness: { type: Boolean, default: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', schema);
module.exports = User;