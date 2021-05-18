const { MongoClient } = require("mongodb");

// Create a new MongoClient
const client = new MongoClient(process.env.MONGO_URL_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function makeDb(){
    // If client is not connected to mongo-server yet, connect
    if(!client.isConnected()){
        await client.connect();
    }
    // return a new connection a provided database in use
    return  client.db(process.env.MONGO_DB_NAME);
}

module.exports = Object.freeze({
    makeDb
});
