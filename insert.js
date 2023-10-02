const dbconnect = require("./mongodb-connection");

const insertData = async () => {
    let db = await dbconnect();

    //insert onle one data
    const result = await db.insertMany(
        [{
            name: 'Rahul 1',
            brand: 'Micromax',
            price: 3000,
            category: "Phone",
            company: 'Indian'
        },
        {
            name: 'Rahul 2',
            brand: 'Micromax',
            price: 5000,
            category: "Laptop",
            company: 'Banglore'
        },
        {
            name: 'Rahul 3',
            brand: 'Micromax',
            price: 5000,
            category: "Laptop",
            company: 'Banglore'
        },
        {
            name: 'Rahul 4',
            brand: 'Micromax',
            price: 5000,
            category: "Laptop",
            company: 'Banglore'
        }
        ]
    )
    // console.log(result);
    if (result.acknowledged) {
        console.log("data inserted successfully");
    }

}
insertData();