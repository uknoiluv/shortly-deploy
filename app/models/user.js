var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Schema = db.Schema;
var ObjectId = db.ObjectId;
console.log(db.Schema);

var User = new Schema({
  id : ObjectId,
  username : {type: String, unqiue: true},
  password : {type: String},
  createdAt : {type : Date, default: Date.now}
});

User.methods = {
  initialize: function(){
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  },
  hashPassword: function(){
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  }
};
// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,

module.exports = User;
