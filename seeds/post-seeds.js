const { Post } = require('../models');

const postData = [
    {
        "title": "Backend Dev",
        "post_text": "express js is fun and challenging.",
        "user_id": 2
    },
    {
        "title": "What packages are used for this challenge?",
        "post_text": "express, handlebars, dotenv, sequelize, express-session, etc.",
        "user_id": 1
    },
    {
        "title": "This is a test post title.",
        "post_text": "This is the body of the test post. Testing test post data.",
        "user_id": 3
    }
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;