const request = require("supertest");
const app = require("../../src/http/server");

const { makeFakeUser } = require("../fixtures");
const { makeDb } = require("../../src/db");

describe("Authentication routes", () => {
    let fakeUser;

    beforeEach(() => {
        fakeUser = makeFakeUser();
    });

    afterAll(async () => {
        let db = await makeDb();
        await db.collection("users").deleteMany({});
    });

    it("Should return 400 for invalid user data", async () => {
        fakeUser.name = "";
        const res = await request(app)
            .post("/api/auth/signup")
            .send(fakeUser);

        expect(res.status).toBe(400);
        expect(res.body.error).toBeDefined();
    });

    it("Should return a valid auth token for valid user", async () => {
        const res = await request(app)
            .post("/api/auth/signup")
            .send(fakeUser);

        expect(res.status).toBe(201);
        expect(res.body.token).toBeDefined();
    });

    it("Should return 400 for email duplication", async () => {
        await request(app)
            .post("/api/auth/signup")
            .send(fakeUser);

        const res = await request(app)
            .post("/api/auth/signup")
            .send(fakeUser);

        expect(res.status).toBe(400);
        expect(res.body.error).toBeDefined();
    });
});
