const withAuth = require('../utils/auth');
const { User } = require('../models');
const router = require('express').Router();




router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('dashboard', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log('not logged in');
  }
});


// router.get('/login', (req, res) => {
//   res.render('login');
//   return;
// });

module.exports = router;

