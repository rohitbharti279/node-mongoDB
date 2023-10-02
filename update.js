const dbconnect = require("./mongodb-connection");

const updateData = async () => {
    const db = await dbconnect();

    // // single update and top update the beginning of the database
    // const result = await db.updateOne({brand: "NOkia"},{
    //     $set: {category: "pc", company: "Patna", brand: "Gionee"}
    // });

    //Multiple update
    const result = await db.updateMany({brand: "NOkia"},{
        $set: {category: "pc", company: "Patna", brand: "Gionee"}
    });
    console.log(result);
}

updateData();