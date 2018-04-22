//library imports
var express = require('express');
var bodyParser = require('body-parser');

//local imports
var {mongoose} = require('./db/mongoose.js'); //ES6 feature.
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


//Now this file is just gonna be responsible for our routes
var app = express();

app.use(bodyParser.json());              //setting the middleware.so that we can send json data to request object.

app.post('/todos' ,(req, res) => {
   var todo = new Todo({
      text: req.body.text
   });

   todo.save().then((doc) => {
  res.send(doc);                 //response giving back to user
   }, (e) => {
   res.status(400).send(e);        //if bad request set status 400 for it (Bad input).
   })
   // console.log(req.body);
});


app.listen(3000, () => {   //setting up local host.
  console.log('Started on port 3000');
})















// // var newTodo = new Todo({
// //   text: 'Cook dinner'
// // });
//
// var otherTodo = new Todo({
//   text: 'Something to do'  //spaces at begginig and end gets trimmed.
// });
//
// otherTodo.save().then((doc) => {           //save is responsible for actualy saving to mongoDB, it returns a promise.
// console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('enable to save todo',e)
// });
// // newTodo.save().then((doc) => {           //save is responsible for actualy saving to mongoDB, it returns a promise.
// // console.log('Saved todo', doc);
// // }, (e) => {
// //   console.log('enable to save todo')
// // });



// var newUser = new User({
//   email: 'rawat@gmail.com'
// })
//
// newUser.save().then((docEmail) => {
//   console.log(docEmail);
// },(e) => {
//   console.log('you did something wrong!', e);
// });
