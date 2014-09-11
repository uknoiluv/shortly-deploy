var app = require('./server-config.js');

// <<<<<<< HEAD
// var port = process.env.port || 4568;
// =======
var port = process.env.PORT || 4568;
// >>>>>>> modified for deployment

app.listen(port);

console.log('Server now listening on port ' + port);
