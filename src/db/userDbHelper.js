function makeUserDb({ makeDb, ObjectId }){
    const collection = "users";

    return Object.freeze({
        findById,
        findByEmail,
        insertOne,
        updateById,
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

    async function updateById(id, updates){
        const db = await makeDb();
        const result = await db.collection(collection).findOneAndUpdate({_id: new ObjectId(id)}, {
            $set: {
                ...updates
            }
        }, { returnDocument: "after"});

        return result.value;
    }
}

module.exports = makeUserDb;
