const router = require('express').Router();
const { Muscle, Workout } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all muscles for homepage
router.get('/', async (req, res) => {
  try {
    const dbMuscleData = await Muscle.findAll({
      include: [
        {
          model: Muscle,
          attributes: ['filename'],
        },
      ],
    });

    const muscles = dbMuscleData.map((muscle) =>
      muscle.get({ plain: true })
    );

    res.render('homepage', {
      muscles,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one muscle group
// Use the custom middleware before allowing the user to access the gallery
router.get('/muscle/:id', withAuth, async (req, res) => {
  try {
    const dbMuscleData = await Muscle.findByPk(req.params.id, {
      include: [
        {
          model: Workout,
          attributes: [
            'id',
            'title',
            'filename',
            'description',
          ],
        },
      ],
    });

    const muscle = dbMuscleData.get({ plain: true });
    res.render('muscle', { muscle, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one workout
// Use the custom middleware before allowing the user to access the painting
router.get('/workout/:id', withAuth, async (req, res) => {
  try {
    const dbWorkoutData = await Workout.findByPk(req.params.id);

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

module.exports = router;
