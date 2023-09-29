const {MongoClient} = require("mongodb");
// const MongoClient = require("mongodb").MongoClient; // same as above

const url = 'mongodb://127.0.0.1:27017'; //address/path of the database connection (defaults to 'mongodb://localhost:27017') same for all

const client = new MongoClient(url);

async function getData() 
{
    let result = await client.connect();
    let database = result.db("e-comm"); // database connection
    let collectionss = database.collection('products'); // collection
    let response = await collectionss.find({}).toArray();
    console.log(response);
}

getData();

// console.log("1_hello");





