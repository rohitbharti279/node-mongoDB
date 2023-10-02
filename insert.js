const dbconnect = require("./mongodb-connection");

const insertData = async () => {
    let db = await dbconnect();

    //insert onle one data
    const result = db.insertOne(
        {
            name: 'rohit 300',
            brand: 'NOkia',
            price: 3000,
            category: "Phone",
            company: 'Indian'
        }
    )
    // console.log("object");

}
insertData();