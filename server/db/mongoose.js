var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  //we have set it up to use promises(built-in library) which is exactly we want.
mongoose.connect('mongodb://localhost:27017/TodoApp');   //connected to the Db  //by-dafault mongoose support callbacks.
//mongoose is maintainig this connection overtime.
// save new something




module.exports = {
  mongoose: mongoose   //or can write mongoose only ES6 feature. 
}
