const { UserDb, makeDb } = require("../../db");
const { signUp } = require("./index");

const makeSignIn = require("./sign-in");
const { makeFakeUser } = require("../../../__tests__/fixtures");
const { isPasswordMatch } = require("./password");
const { makeAuthToken, decodeAuthToken } = require("./jwt");

describe("Sign in", () => {
    let fakeUser;
    let signIn;

    beforeEach(() => {
        fakeUser = makeFakeUser();
    });

    beforeAll(() => {
        signIn = makeSignIn({ UserDb, isPasswordMatch, generateAuthToken: makeAuthToken });
    });

    afterAll(async () => {
        let db = await makeDb();
        await db.collection("users").deleteMany({});
    });

    it("Should throw if no email is provided!", async () => {
        const { password } = fakeUser;
        expect(() => signIn({ password })).rejects.toThrow();
    });

    it("Should throw if no password is provided!", async () => {
        const { email } = fakeUser;
        expect(() => signIn({ email })).rejects.toThrow();
    });

    it("Should throw if no user with provided email found!", async () => {
        const { email, password } = fakeUser;
        await expect(signIn({ email, password })).rejects.toThrow();
    });

    it("Should throw if invalid password provided!", async () => {
        await signUp(fakeUser);
        fakeUser.password = "dfsdfffdfsfsd"
        await expect(signIn(fakeUser)).rejects.toThrow();
    });

    it("Should return a valid authToken for valid email and password", async () => {
        await signUp(fakeUser);

        const authToken = await signIn(fakeUser);
        const tokenInfo = await decodeAuthToken(authToken);
        
        const createdUser = await UserDb.findByEmail(fakeUser.email);
        
        expect(tokenInfo).toBeDefined();
        expect(tokenInfo.user).toMatch(createdUser._id.toString());
    })
})