const OP_TEXT = {
    type: String,
    minLength: 2,
    maxLength: 256,
    trim: true,
    lowercase: true,
    default: 'Not Available'
};

const REQ_TEXT = {
    type: String,
    required: true,
    minLength:2,
    maxLength: 124,
    trim: true,
    lowercase: true
};

const URL = {
    type: String,
    match: RegExp(
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    ),
    trim: true,
    lowercase: true
};

const PHONE = {
    type: String,
    required: true,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
};

const EMAIL = {
    type: String,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    lowercase: true,
    trim: true,
    unique: true
};

const PASSWORD = {
    type: String,
    required: true,
    match: RegExp(/[a-z]+[0-9]+-=_\+\[\]\{\}!@#\$%\^&\*\(\)\?/i),
    trim: true,
    minLength: 8
};

exports.OP_TEXT = OP_TEXT;
exports.REQ_TEXT = REQ_TEXT;
exports.URL = URL;
exports.PHONE = PHONE;
exports.EMAIL = EMAIL;
exports.PASSWORD = PASSWORD;