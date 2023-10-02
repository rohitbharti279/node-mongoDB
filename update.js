const dbconnect = require("./mongodb-connection");

const updateData = async () => {
    const db = await dbconnect();
    console.log(db);
}

updateData();