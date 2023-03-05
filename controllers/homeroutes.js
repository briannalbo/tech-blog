//imports express router & models
const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

//route to find and display all existing posts in descending order from when they were created
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['name'],
        }
      ]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('home', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to get a single post 
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('single-post', { post, logged_in: req.session.logged_in });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to render the login/sign up form page 
router.get('/login', (req, res) => {
  res.render('login');
  return;
});

//exports these routes for use
  module.exports = router;