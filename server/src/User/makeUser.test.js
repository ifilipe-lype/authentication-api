const makeUser = require("./index");
const { makeFakeUser } = require("../../__tests__/fixtures");

describe("makeUser", () => {
    let fakeUser;

    beforeEach(() => {
        fakeUser = makeFakeUser();
    });

    it("Should throw if no name is provided!", async () => {
        fakeUser.name = ""
        expect(() => makeUser(fakeUser)).rejects.toThrow();
    });

    it("Should throw if no email is provided!", async () => {
        fakeUser.email = ""
        expect(() => makeUser(fakeUser)).rejects.toThrow();
    });

    it("Should throw if invalid email is provided!", async () => {
        fakeUser.email = "invalidemail"
        expect(() => makeUser(fakeUser)).rejects.toThrow();
    });

    it("Should throw no password is provided!", async () => {
        fakeUser.password = ""
        expect(() => makeUser(fakeUser)).rejects.toThrow();
    });

    it("Should throw if password is less than 8 chars long!", async () => {
        fakeUser.password = "12345"
        expect(() => makeUser(fakeUser)).rejects.toThrow();
    });

    it("Should throw if password is not a mix of uppercase and lowercase and numbers", async () => {
        fakeUser.password = "12345678"
        expect(() => makeUser(fakeUser)).rejects.toThrow();
    });

    it("Should not throw for valid user info!", async () => {
        expect(() => makeUser(fakeUser)).not.toThrow();
    });

    it("Should be able to retrive user's info through helpers method", async () => {
        const user = await makeUser(fakeUser);
        expect(user.getName()).toBe(fakeUser.name);
        expect(user.getPhoto()).toBe(fakeUser.photo);
        expect(user.getPhone()).toBe(fakeUser.phone);
        expect(user.getBio()).toBe(fakeUser.bio);
        expect(user.getEmail()).toBe(fakeUser.email);
        expect(user.getPassword()).toBe(fakeUser.password);
    });
});
