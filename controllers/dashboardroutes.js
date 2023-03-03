const withAuth = require('../utils/auth');
const { User, Post } = require('../models');
const router = require('express').Router();




router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.redirect('login');
  }
});





router.get('/new-post', withAuth, (req, res) => {
  res.render('newPost', { logged_in: req.session.logged_in });
});





module.exports = router;

