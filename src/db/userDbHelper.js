function makeUserDb({ makeDb }){
    const collection = "users";

    return Object.freeze({
        findByEmail,
        insertOne,
    });

    async function insertOne(userData){
        const db = await makeDb();
        const results = await db.collection(collection).insertOne(userData);

        return results.ops[0];
    }

    async function findByEmail(email){
        const db = await makeDb();
        const user = await db.collection(collection).findOne({ email });

        return user;
    }
}

module.exports = makeUserDb;
