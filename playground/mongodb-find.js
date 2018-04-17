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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5ad2ff9a3c79f868e491548a')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });//find() return a document pointer & .toArray() returns array of documents.
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });//find() return a document pointer & .toArray() returns array of documents.

db.collection('Users').find({
  name: 'Tushar'
}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log(err);
})
  // db.close();
});
