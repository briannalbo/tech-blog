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
// updates existing post 
router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const dbPostData = await Post.update(
      {
        title: req.body.newTitle,
        post_text: req.body.newText,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(dbPostData)
    if (!dbPostData) {
      res.status(400).json({ message: "Could not update post!" });
      return;
    }
    res.status(200).json({ message: "Updated successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//deletes a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.params.id)
    const dbPostData = await Post.destroy({ 
      where: { id: req.params.id } });
    if (!dbPostData) {
      res.status(400).json({ message: "There was an issue." });
      return;
    }
    res.status(200).json({ message: "Post deleted." });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;