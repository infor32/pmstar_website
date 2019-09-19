var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/PMStar-2019');
var Schema = mongoose.Schema;

var announce = new Schema({
    title: String,
    date: Date,
    content: String,
    attachment: String,
    attachmentName: String
});
var ann = mongoose.model('announce', announce);

module.exports = ann;