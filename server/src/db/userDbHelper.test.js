const makeUserDb = require("./userDbHelper");
const { makeDb } = require("./index.js");
const { makeFakeUser } = require("../../__tests__/fixtures");
const { afterAll, expect } = require("@jest/globals");

describe("User database", () => {
    let UserDb;
    let db;
    let fakeUser;

    beforeAll(async () => {
        db = await makeDb();
        UserDb = await makeUserDb({ makeDb });

        await db.collection("users").deleteMany({});
    });

    beforeEach(() => {
        fakeUser = makeFakeUser();
    });

    afterAll(async () => {
        await db.collection("users").deleteMany({});
    })

    it("Should insert a new user into database and return it", async () => {
        const user = await UserDb.insertOne(fakeUser);

        expect(user._id).toBeDefined();
        expect(user.photo).toBe(fakeUser.photo);
        expect(user.name).toBe(fakeUser.name);
        expect(user.bio).toBe(fakeUser.bio);
        expect(user.phone).toBe(fakeUser.phone);
        expect(user.email).toBe(fakeUser.email);
        expect(user.password).toBe(fakeUser.password);
    });

    it("Should find an existing user by email", async () => {
        const insertedUser = await UserDb.insertOne(fakeUser);
        const foundUser = await UserDb.findByEmail(insertedUser.email);

        expect(foundUser).toBeDefined();
        expect(foundUser._id).toEqual(insertedUser._id);
        expect(foundUser.email).toBe(insertedUser.email);
    })
})