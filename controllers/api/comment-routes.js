const router = require('express').Router();
const { User } = require('../../models');
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// CREATE new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      comment_text: req.body.newComment,
      post_id: req.body.postId,
      user_id: req.session.user_id,
    });

    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;