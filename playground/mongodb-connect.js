//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //this create a var MongoClient setting it equal to the MongoClient prop.
                                          //of require mongo-db.
// var obj = new ObjectID();
// console.log(obj);
// var user = {name:'Tushar',age:20};
// var {name} = user; //ES6 feature of destrutoring object properties.
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));  //results.ops contain all the documents array added to Todos collection.
  // });

// db.collection('Users').insertOne({
//   // _id: 123,
//   name: 'Tushar',
//   age :21
// }, (err, result) => {
//   if(err){
//     console.log('Unable to insert user', err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
// });

   db.close();
});
