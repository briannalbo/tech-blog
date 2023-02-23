const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new post
router.post('/', withAuth, async (req, res) => {
  console.log(req.body)
  try {
    const dbPostData = await Post.create({
      title: req.body.postTitle,
      post_text: req.body.postText,
      user_id: req.session.user_id,
    });
    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;