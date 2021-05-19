const { UserDb, makeDb } = require("../../db");
const makeSignUp = require("./sign-up");
const { hashPassword } = require("./password");
const { makeAuthToken, decodeAuthToken } = require("./jwt");

const { makeFakeUser } = require("../../../__tests__/fixtures");

describe("sign-up", () => {
    let signUp;
    let fakeUser;

    beforeEach(async () => {
        fakeUser = makeFakeUser();
    });

    beforeAll(async () => {
        signUp = makeSignUp({ UserDb, hashPassword, makeAuthToken });
    });
    
    afterAll(async () => {
        let db = await makeDb();
        await db.collection("users").deleteMany({});
    });

    it("Should throw an error if invalid user", async () => {
        fakeUser.email = "";
        expect(signUp(fakeUser)).rejects.toThrow();
    });

    it("Should throw an error for duplicated email", async () => {
        await signUp(fakeUser);
        await expect(signUp(fakeUser)).rejects.toThrow();
    });

    it("Should return a token string when succeed to register an user", async () => {
        const token = await signUp(fakeUser);
        expect(token).not.toBe(undefined);
    });

    it("Should return a valid token string when succeed to register an user", async () => {
        const token = await signUp(fakeUser);
        expect(decodeAuthToken(token)).resolves.not.toThrow();
    });

    it("Should return a token with user's id and role init", async () => {
        const token = await signUp(fakeUser);
        const decoded = await decodeAuthToken(token);
        const createdUser = await UserDb.findByEmail(fakeUser.email);
        
        expect(decoded.user).toMatch(createdUser._id.toString());
    });
});
