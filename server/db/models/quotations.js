// File: ./models/quotations.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var QuotationSchema = new Schema({
    code: String,
    name: String,
    price: Number,
    qty: Number
});

module.exports = mongoose.model('Quotation', QuotationSchema );