const { Exercise } = require('../models');

const exerciseData = [
  {
    title: 'Arm Circles',
    type: 'upper',
    filename: '',
    description:
      'Extend your arms out to the side. From the shoulder, rotate your arms forward; reverse direction halfway through your set.',
  },
  {
    title: 'Bear Crawl',
    type: 'upper',
    filename: '',
    description:
      "Starting on all fours, lift your knees so they're at a 90-degree angle and hovering off the ground. Move one hand and the opposite foot forward an equal distance while staying low to the ground.    Switch sides, moving the opposite hand and foot. Repeat."
  },
  {
    title: 'Tricep Dip',
    type: 'upper',
    filename: '',
    description:
      'Place your hands behind you a chair or similar surface, so that your fingers face forward. Extend your legs and bend your elbows, lowering your body until your arms are at a 90-degree angle. Pushing down with your arms, lift your body until your arms are straight.'
  },
  {
    title: 'Push-Up',
    type: 'upper',
    filename: '',
    description:
      'From a straight-arm plank position with your hands placed slightly wider than your shoulders, bend your arms until your chest nearly touches the floor. Using your arms, push your body up away from the floor until you return to your starting position.'
  },
  {
    title: 'Decline Push-Up',
    type: 'upper',
    filename: '',
    description:
      'From a straight-arm plank position with your hands placed slightly wider than your shoulders and your feet placed on a chair (or a surface of a similar height), bend your arms until your chest nearly touches the floor. Using your arms, push your body up away from the floor until you return to your starting position.'
  },
  {
    title: 'Burpee',
    type: 'upper',
    filename: '',
    description:
      'Start from a standing position. Place your hands on the floor and jump your legs back into a plank position. Jump your legs forward to meet your hands, and then use your legs to jump upwards, returning to your starting position.'
  },
  {
    title: 'Commando',
    type: 'upper',
    filename: '',
    description:
      'From a straight-arm plank, transition to a forearm plank. Return to a straight-arm plank. Repeat, alternating which arm leads the transition to and from the forearm plank.'
  },
  {
    title: 'Plank & Shoulder Tap',
    type: 'upper',
    filename: '',
    description:
      'From a plank position, lift one hand from the floor and tap the opposite shoulder. Return to plan position. Repeat, alternating sides.'
  },
  {
    title: 'Yoga Push-Up',
    type: 'upper',
    filename: '',
    description:
      'Starting from downward-facing dog, shift your body forward into a straight-arm plank position. Bending your arms, lower your chest to the floor, and then straighten your arms to transition into upward-facing dog. Pushing into the floor with your arms, return to downward-facing dog.'
  },
  {
    title: 'Sqat & Side Kick',
    type: 'lower',
    filename: '',
    description:
      'Stand with your feet shoulder-width apart. Lower into a squat, and then return to standing position. Kick one leg out to the side, and then return to standing. Repeat, alternating sides.'
  },
  {
    title: 'Pistol Squat',
    type: 'lower',
    filename: '',
    description:
      'Starting from a standing position, extend one leg straight out in front of you so that it is parallel to the floor (or, as close as possible). Bend your standing leg into a squat while keeping the non-standing leg straight. Extend the working leg, and return to your starting position. Repeat, alternating sides.'
  },
  {
    title: 'Jump Squat',
    type: 'lower',
    filename: '',
    description:
      'Starting from a standing position with your legs shoulder-width apart, lower down into a squat. From this position, jump up so that your feet leave the ground. Return to standing position and repeat.'
  },
  {
    title: 'Sumo Squat',
    type: 'lower',
    filename: '',
    description:
      'Stand with your legs wider than shoulder-width, toes pointing forward and slight out. Lower down into a squat, and return to starting position. Repeat.'
  },
  {
    title: 'Reverse Lunge',
    type: 'lower',
    filename: '',
    description:
      'Starting from a standing position, step one leg behind you as you bend both your front and back knees. Return your extended leg and come to a standing position. Repeat, alternating sides.'
  },
  {
    title: 'Lunge Kickback',
    type: 'lower',
    filename: '',
    description:
      'From a standing position, step your right leg forward, bending both knees into a lunge position. Straightening your left leg, return to a standing position while kicking your right leg behind you. Return to your starting position and repeat, alternating sides.'
  },
  {
    title: 'Forward Lunge Punches',
    type: 'lower',
    filename: '',
    description:
      'From a standing position, step your right leg forward, bending both knees into a lunge position. Punch your right arm forward. Return to starting position and repeat, alternating sides.'
  },
  {
    title: 'Single-Leg Glute Bridge',
    type: 'lower',
    filename: '',
    description:
      'Lie on the floor.'
  },
  {
    title: 'Jump Lunge',
    type: 'lower',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Frog Jump',
    type: 'lower',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Flutter Kicks',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Dead Bug',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Crunch',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Side Plank',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Leg Raise',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Plank',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Ab Bikes',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Heel Touches',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Straight-Leg Jackknife',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Hollow Hold',
    type: 'core',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Quads',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Glutes',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Calves & Hamstrings',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Calves & Hamstrings',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Hip Flexors',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Triceps',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Shoulders/Deltoids',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Back',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Abdominals',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  },
  {
    title: 'Lats',
    type: 'stretch',
    filename: '',
    description:
      'Desc.'
  }  
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;
