function makeUserDb({ makeDb, ObjectId }){
    const collection = "users";

    return Object.freeze({
        findById,
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

    async function findById(id){
        const db = await makeDb();
        return await db.collection(collection).findOne({ _id: new ObjectId(id) });
    }
}

module.exports = makeUserDb;
