const { User } = require('../models');

const userData = [
    {
        "username": "brianna1",
        "email": "brianna@mail.com",
        "password": "password"
    },
    {
        "username": "peanut",
        "email": "peanut@mail.com",
        "password": "peanut"
    },
    {
        "username": "Saturn",
        "email": "planet@mail.com",
        "password": "planets1"
    }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;