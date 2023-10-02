const dbconnect = require("./mongodb-connection");

const deletedb = async () =>{
    const db =await dbconnect();
    const result = await db.deleteMany({category: "pc"});
    //how to lnow the data is deleted or not?   => deletedCount: 0
    console.log(result);
    if(result.acknowledged)
    {
        console.log("deleted successfully");
    }
}

deletedb();