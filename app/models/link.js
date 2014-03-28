var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
  url : String,
  base_url : String,
  code : String,
  title : String,
  visits : {type: Number, default: 0},
  createdAt : {type : Date, default: Date.now}
});

var Link = mongoose.model('Link', LinkSchema);

LinkSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = Link;
