const router = require('express').Router();

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
    return;
  });

router.get('/login', (req, res) => {
    res.render('login');
    return;
});

  module.exports = router;