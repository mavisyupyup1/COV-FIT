const router = require('express').Router();
const { Workout, Exercise, User, WorkoutExercise ,Schedule} = require('../models');
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

// workout routes displaying all exercise under muscle group log in required
router.get('/workout/:id', withAuth,async (req, res) => {
if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
 Workout.findOne({
   where:{workout_id:req.params.id},
      include:[
        {model: Exercise,
        attributes:['exercise_id','filename','title']}
      ]
    })
    .then(dbWorkoutData=>{
        //res.json(dbWorkoutData)
    const workout = dbWorkoutData.get({plain:true})
    // res.json(workout)
     res.render('workout', {workout,
    loggedIn: true,});
    })
 .catch (err=> {
    console.log(err);
    res.status(500).json(err);
  })
};
})

// GET one exercise
// Use the custom middleware before allowing the user to access the exercise
router.get('/exercise/:exercise_id', withAuth, (req, res) => {
  Exercise.findOne({
    where:{ exercise_id:req.params.exercise_id},
    attributes:[
      'exercise_id',
      'title',
      'description',
      'filename',
      'type'
    ]})
    .then(dbExerciseData=>{
      const exercise = dbExerciseData.get({plain:true})
      res.render('exercise',{exercise,loggedIn:true})
      //res.json(dbExerciseData)
    })
  .catch (err=>{
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/exercise/scheduler/event',withAuth,(req,res)=>{
  console.log('=============== ')
  console.log(req.session.user_id)
  Schedule.findAll({
      where:{
          user_id:req.session.user_id
      },
      attributes:[
          'start', 'id'
      ],
      include:[
          {
              model:Exercise,
              attributes:['title'],
          },
      ]
  })
  .then(dbScheduleData=>{
  const mappedEvents = dbScheduleData.map(event=>{
    const eventObj =event.get({plain:true})
    const mappedEvent = {start:eventObj.start,title:eventObj.exercise.title,id:eventObj.id};
    console.log(mappedEvent);
    return mappedEvent;
  })
  res.json(mappedEvents)
   })
  .catch(err=>{
      console.log(err);
      res.status(500).json(err)
  })
  console.log()
})
// GET all exercise of type (upper, lower, core, stretch, all?)
// Use the custom middleware before allowing the user to access the exercises
router.get('/workout/:id', withAuth, async (req, res) => {
  try {
    console.log('---------------------------');
    const dbExerciseData = await Exercise.findAll({
      where: {
          type: req.params.type
      },
      // include: [
      //   {
      //     model: User,
      //     attributes: [
      //       'id',
      //       'name',
      //       'weight',
      //       'username',
      //       'email',
      //       'password',
      //     ],
      //   },
      // ],
    });

    const exercise = dbExerciseData.get({ plain: true })

    res.render('exercise', { exercise, loggedIn: req.session.loggedIn });
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// add sign up route

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
