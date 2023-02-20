const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('.');
    return;
  });

  module.exports = router;