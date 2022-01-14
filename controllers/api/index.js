const router = require('express').Router();

const userRoutes = require('./user-routes');
const schedulerRoutes = require('./scheduler-routes')
router.use('/users', userRoutes);
router.use('/scheduler',schedulerRoutes);
module.exports = router;
