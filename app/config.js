//var connectionString = process.env.MONGOCON;
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect(connectionString);
var db = mongoose.connection;
db.once('open', function(){
  console.log('connected to db');
});
//console.log(exports.Schema);

module.exports = db;
  // client: 'sqlite3',
  // connection: {
  //   host: '127.0.0.1',
  //   user: 'your_database_user',
  //   password: 'password',
  //   database: 'shortlydb',
  //   charset: 'utf8',
  //   filename: path.join(__dirname, '../db/shortly.sqlite')
  // }






// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });


// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

