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








const dbconnect = require("./mongodb-connection")

//find and display/read the data

// //use promise
// dbconnect().then((resolve) => {
//     resolve.find().toArray().then((data) => {
//         console.log(data);
//     })
// })

const main = async ()=> {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();
