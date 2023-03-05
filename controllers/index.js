//imports express router and route files
const router = require('express').Router();
const homeRoutes = require('./homeroutes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardroutes');

//assigns each type of route to a path for use
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes)


module.exports = router;