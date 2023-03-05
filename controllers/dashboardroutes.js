//imports models, express router, and withauth helper
const withAuth = require('../utils/auth');
const { User, Post } = require('../models');
const router = require('express').Router();

//route to retrieve all posts belonging to the logged in user
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

//route to render page with form for user to input new post data
router.get('/new-post', withAuth, (req, res) => {
  res.render('newPost', { logged_in: req.session.logged_in });
});

//route to update a specific post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json(err).end();
    } else {
      const post = dbPostData.get({ plain: true });
      res.render('edit-post', { 
        post, 
        logged_in: req.session.logged_in })
    };
  } catch (err) {
    console.log(err);
    res.redirect('/dashboard');
  }
});

//exports all of these routes for use
module.exports = router;

