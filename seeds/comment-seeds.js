const { Comment } = require('../models')

const commentData = [
    {
      "comment_text": "I agree, it is challenging.",
      "post_id": 1,
      "user_id": 1
    },
    {
      "comment_text": "I think there are more than that",
      "post_id": 2,
      "user_id": 3
    },
    {
      "comment_text": "This is a test comment on the test post ",
      "post_id": 3,
      "user_id": 2
    }
    
  ];
  const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;