//imports each model
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//establishes relationships between models
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE',
  });

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

//exports model relationships
module.exports = { User, Post, Comment };