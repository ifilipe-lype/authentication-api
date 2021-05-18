function makeUserDb({ makeDb }){
    const collection = "users";

    return Object.freeze({
        insertOne,
    });

    async function insertOne(userData){
        const db = await makeDb();
        const results = await db.collection(collection).insertOne(userData);
        
        return results.ops[0];
    }
}

module.exports = makeUserDb;
