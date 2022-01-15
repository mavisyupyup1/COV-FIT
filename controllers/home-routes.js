const router = require('express').Router();
const { Workout, Exercise, User, WorkoutExercise } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');


// home route, not calling any db, just loggedIn
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all exercise of type (upper, lower, core, stretch, all?)
// Use the custom middleware before allowing the user to access the exercises
router.get('/exercise/:type', withAuth, async (req, res) => {
  try {
    const dbExerciseData = await Exercise.findByPk(req.params.type, {
      include: [
        {
          model: Exercise,
          attributes: [
            'exercise_id',
            'title',
            'type',
            'filename',
            'description',
          ],
        },
      ],
    });

    const exercise = dbExerciseData.get({ plain: true });
    res.render('exercise', { exercise, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one exercise
// Use the custom middleware before allowing the user to access the painting
router.get('/exercise/:exercise_id', withAuth, async (req, res) => {
  try {
    const dbExerciseData = await Paint/ing.findByPk(req.params.exercise_id);

    const exercise = dbExerciseData.get({ plain: true });

    res.render('exercise', { exercise, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET schedule page
// Use the custom middleware before allowing the user to access the scheduler
router.get('/schedule/workout_id', withAuth, async (req, res) => {
  try {
    const dbWorkoutData = await Workout.findByPk(req.params.workout_id, {
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
    res.render('workout', { workout, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// former Gallery route, left for reference

// router.get('/oldhome', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findAll({
//       include: [
//         {
//           model: Painting,
//           attributes: ['filename', 'description'],
//         },
//       ],
//     });

//     const galleries = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );

//     res.render('homepage', {
//       galleries,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
