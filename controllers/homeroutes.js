const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// router.get('/', (req, res) => {
//   res.render('home');
//   return;
// });

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

      res.render('single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  res.render('login');
  return;
});

  module.exports = router;