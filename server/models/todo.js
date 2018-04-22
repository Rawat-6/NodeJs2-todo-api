var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {                     //returns a function object ,creating a working mongoose model.
  text:{
    type: String,
    required: true,  //validators
    minLength: 1,     //validators
    trim: true        //spaces at begginig and end gets trimmed. by providing this validator
  },
  completed: {
    type: Boolean,
    default: false       //validators
  },
  completedAt: {
    type: Number,
    default: null          //validators
  }
});

module.exports = {Todo};  //ES6
