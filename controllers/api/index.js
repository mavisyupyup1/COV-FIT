const router = require('express').Router();

const userRoutes = require('./user-routes');
const schedulerRoutes = require('./scheduler-routes');
const exerciseRoutes = require('./exercise-routes');

router.use('/users', userRoutes);
// TODO add exercise api as needed
router.use('/exercise', exerciseRoutes);
router.use('/scheduler',schedulerRoutes);

module.exports = router;
