const router = require('express').Router();


router.get('/', (req, res) => {
  res.render('dashboard');
  return;
});

// router.get('/login', (req, res) => {
//   res.render('login');
//   return;
// });

module.exports = router;

