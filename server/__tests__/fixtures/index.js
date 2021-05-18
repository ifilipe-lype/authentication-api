const faker = require("faker");

function makeFakeUser(overrides){
    return {
        name: faker.name.findName() ,
        email: faker.internet.exampleEmail(),
        password: "H3lov4al1ndpwD", // Hard code a valid password, due to max callstack recur error
        ...overrides
    };
};

module.exports = Object.freeze({
    makeFakeUser,
});
