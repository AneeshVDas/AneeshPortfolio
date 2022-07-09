const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PortfolioDB');

const Schema = mongoose.Schema;

var NewPortfolio = new Schema({
    productName : String,
    description : String
});

var portfoliodata = mongoose.model('NewPortfolio', NewPortfolio);

module.exports = portfoliodata;
