// const {MongoClient} = require("mongodb");
// // const MongoClient = require("mongodb").MongoClient; // same as above

// const url = 'mongodb://127.0.0.1:27017'; //address/path of the database connection (defaults to 'mongodb://localhost:27017') same for all

// const client = new MongoClient(url);

// async function getData() 
// {
//     let result = await client.connect();
//     let database = result.db("e-comm"); // database connection
//     let collections = database.collection('products'); // collection
//     // let response = await collections.find({}).toArray(); //search for all data
//     let response = await collections.find({name: "Rohit Bharti"}).toArray();
//     console.log(response);
// }

// getData();

// // console.log("1_hello");






// using promise
// const prom = new Promise((resolve, reject) => {});

const {MongoClient} = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
const database1 = "e-comm";

async function dbconnect () {
    const result = await client.connect();
    const database = result.db(database1);
    return database.collection("products");
    // const data = await collection.find({}).toArray();
    // console.log(data); 
}

// console.warn(dbconnect());
dbconnect().then((resolve) => {
    resolve.find().toArray().then((data) => {
        console.log(data);
    })
})
