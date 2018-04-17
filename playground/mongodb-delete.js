//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //this create a var MongoClient setting it equal to the MongoClient prop.
                                          //of require mongo-db.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Todos').deleteMany({
// text: 'Eat Breakfast'
// }).then((result) => {
//   console.log(result);s
// });
db.collection('Users').deleteMany({name:'Tushar'}).then((result) => {
  console.log(result);
})

//deleteOne
// db.collection('Todos').deleteOne({ text: 'eat lunch'}).then((result) => {
//   console.log(result);
// })


//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// })
db.collection('Users').findOneAndDelete({_id : new ObjectID('5ad2555096236837f03d0977')}).then((result) => {
  console.log(result);
})

  // db.close();
});
