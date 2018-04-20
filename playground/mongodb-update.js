//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //this create a var MongoClient setting it equal to the MongoClient prop.
                                          //of require mongo-db.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//     _id : new ObjectID('5ad6440d50e21a11a22710f6')
//   }, {
//     $set: {   // update operator 'set'
//       completed: true
//     }
//   }, {
//     returnOriginal: false
//   }
// ).then((result) => {
// console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5ad2475bd46bfe1a80b079a8')
}, {
  $set: {
    name: 'Tushar'
  },
  $inc: {                           //another update operator.
   age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})
  // db.close();
});
