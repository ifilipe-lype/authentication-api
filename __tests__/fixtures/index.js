const faker = require("faker");

function makeFakeUser(overrides){
    return {
        photo: faker.random.image(),
        name: faker.name.findName() ,
        bio: faker.random.alpha({ count: 255 }),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.exampleEmail(),
        password: "H3lov4al1ndpwD", // Hard code a valid password, due to max callstack recur error
        ...overrides
    };
};

module.exports = Object.freeze({
    makeFakeUser,
});
