var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username : {type: String, unqiue: true},
  password : {type: String},
  createdAt : {type : Date, default: Date.now}
});

var User = mongoose.model('User', UserSchema);

// User.methods = {
  // initialize: function(){
  //   this.on('creating', this.hashPassword);
  // },

UserSchema.pre('save', function(next){
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.get('password'), null, null).bind(this)
    .then(function(hash) {
      this.set('password', hash);
      next();
    });
});

User.comparePassword = function(attemptedPassword, password, callback) {
  bcrypt.compare(attemptedPassword, password, function(err, isMatch) {
    callback(isMatch);
  });
};

module.exports = User;
