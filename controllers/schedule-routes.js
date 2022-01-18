
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Exercise, User, Workout, WorkoutExercise } = require('../models');
const withAuth = require('../utils/auth');

// GET schedule page
// Use the custom middleware before allowing the user to access the scheduler
router.get('/schedule', withAuth, async (req, res) => {
    try {
      const dbWorkoutData = await Workout.findAll({
        //   Only show workouts for that user
          where: {
              user_id: req.session.user_id
          },
        // Not sure what models are necessary for this feature
        include: [
          {
            model: Workout,
            attributes: [
              'workout_id',
              'title',
              'description',
              'day_of_week',
              'user_id',
            ],
          },
        ],
      });
  
      const workout = dbWorkoutData.get({ plain: true });
      res.render('schedule', { workout, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });