const { Exercise } = require('../models');

const exerciseData = [
  {
    title: 'Arm Circles',
    type: 'upper',
    filename: 'upper_arm-circles.jpg',
    workout_id:2,
    description:
      'Extend your arms out to the side. From the shoulder, rotate your arms forward; reverse direction halfway through your set.',
  },
  {
    title: 'Bear Crawl',
    type: 'upper',
    filename: 'upper_bear-crawl.jpg',
    workout_id:2,
    description:
      "Starting on all fours, lift your knees so they're at a 90-degree angle and hovering off the ground. Move one hand and the opposite foot forward an equal distance while staying low to the ground.    Switch sides, moving the opposite hand and foot. Repeat."
  },
  {
    title: 'Tricep Dip',
    type: 'upper',
    workout_id:2,
    filename: 'upper_tricep-dip.jpg',
    description:
      'Place your hands behind you a chair or similar surface, so that your fingers face forward. Extend your legs and bend your elbows, lowering your body until your arms are at a 90-degree angle. Pushing down with your arms, lift your body until your arms are straight.'
  },
  {
    title: 'Push-Up',
    type: 'upper',
    workout_id:2,
    filename: 'upper_push-up.jpg',
    description:
      'From a straight-arm plank position with your hands placed slightly wider than your shoulders, bend your arms until your chest nearly touches the floor. Using your arms, push your body up away from the floor until you return to your starting position.'
  },
  {
    title: 'Decline Push-Up',
    type: 'upper',
    workout_id:2,
    filename: 'upper_decline-push-up.jpg',
    description:
      'From a straight-arm plank position with your hands placed slightly wider than your shoulders and your feet placed on a chair (or a surface of a similar height), bend your arms until your chest nearly touches the floor. Using your arms, push your body up away from the floor until you return to your starting position.'
  },
  {
    title: 'Burpee',
    type: 'upper',
    workout_id:2,
    filename: 'upper_burpee.jpg',
    description:
      'Start from a standing position. Place your hands on the floor and jump your legs back into a plank position. Jump your legs forward to meet your hands, and then use your legs to jump upwards, returning to your starting position.'
  },
  {
    title: 'Commando',
    type: 'upper',
    workout_id:2,
    filename: 'upper_commando.jpg',
    description:
      'From a straight-arm plank, transition to a forearm plank. Return to a straight-arm plank. Repeat, alternating which arm leads the transition to and from the forearm plank.'
  },
  {
    title: 'Plank & Shoulder Tap',
    type: 'upper',
    workout_id:2,

    filename: 'upper_plank-shoulder-tap.jpg',
    description:
      'From a plank position, lift one hand from the floor and tap the opposite shoulder. Return to plan position. Repeat, alternating sides.'
  },
  {
    title: 'Yoga Push-Up',
    type: 'upper',
    workout_id:2,
    filename: 'upper_yoga-push-up.jpg',
    description:
      'Starting from downward-facing dog, shift your body forward into a straight-arm plank position. Bending your arms, lower your chest to the floor, and then straighten your arms to transition into upward-facing dog. Pushing into the floor with your arms, return to downward-facing dog.'
  },
  {
    title: 'Sqat & Side Kick',
    type: 'lower',
    workout_id:1,
    filename: 'lower_squat-kick.jpg',
    description:
      'Stand with your feet shoulder-width apart. Lower into a squat, and then return to standing position. Kick one leg out to the side, and then return to standing. Repeat, alternating sides.'
  },
  {
    title: 'Pistol Squat',
    type: 'lower',
    workout_id:1,
    filename: 'lower_pistol-squat.jpg',
    description:
      'Starting from a standing position, extend one leg straight out in front of you so that it is parallel to the floor (or, as close as possible). Bend your standing leg into a squat while keeping the non-standing leg straight. Extend the working leg, and return to your starting position. Repeat, alternating sides.'
  },
  {
    title: 'Jump Squat',
    type: 'lower',
    workout_id:1,
    filename: 'lower_jump-squat.jpg',
    description:
      'Starting from a standing position with your legs shoulder-width apart, lower down into a squat. From this position, jump up so that your feet leave the ground. Return to standing position and repeat.'
  },
  {
    title: 'Sumo Squat',
    type: 'lower',
    workout_id:1,
    filename: 'lower_sumo-squat.jpg',
    description:
      'Stand with your legs wider than shoulder-width, toes pointing forward and slight out. Lower down into a squat, and return to starting position. Repeat.'
  },
  {
    title: 'Reverse Lunge',
    type: 'lower',
    workout_id:1,
    filename: 'lower_reverse-lunge.jpg',
    description:
      'Starting from a standing position, step one leg behind you as you bend both your front and back knees. Return your extended leg and come to a standing position. Repeat, alternating sides.'
  },
  {
    title: 'Lunge Kickback',
    type: 'lower',
    workout_id:1,
    filename: 'lower_lunge-kickback.jpg',
    description:
      'From a standing position, step your right leg forward, bending both knees into a lunge position. Straightening your left leg, return to a standing position while kicking your right leg behind you. Return to your starting position and repeat, alternating sides.'
  },
  {
    title: 'Forward Lunge Punches',
    type: 'lower',
    workout_id:1,
    filename: 'lower_lunge-punches.jpg',
    description:
      'From a standing position, step your right leg forward, bending both knees into a lunge position. Punch your right arm forward. Return to starting position and repeat, alternating sides.'
  },
  {
    title: 'Single-Leg Glute Bridge',
    type: 'lower',
    workout_id:1,
    filename: 'lower_glute-bridge.jpg',
    description:
      'Lie on your back with your knees bent and feet planted on the floor. Lifting your right foot from the floor, extend your right leg forward, keeping your thighs parallel. Pushing from your left foot, lift your buttocks from the floor so that your body forms a straight line from your chest to your knees. Lower your buttocks back to the floor. Repeat for the desired number of reps before switching sides.'
  },
  {
    title: 'Jump Lunge',
    type: 'lower',
    workout_id:1,
    filename: 'lower_jump-lunge.jpg',
    description:
      'Start from a lunge position with your right leg forward and your left leg back. Pushing up off the group, jump into the air and alternate your legs so that your left leg extends forward and your right leg extends back. Land in a lunge position. Repeat.'
  },
  {
    title: 'Frog Jump',
    type: 'lower',
    workout_id:1,
    filename: 'lower_frog-jump.jpg',
    description:
      'Start from a sumo squat position (with your feet positioned slightly wider than your shoulders) and your hands touching the floor. Jump up, extending your arms above your head. Return to starting position and repeat.'
  },
  {
    title: 'Flutter Kicks',
    type: 'core',
    workout_id:3,
    filename: 'core_flutters.jpg',
    description:
      'Lie on your back, and tuck your hands (palms down) just above your buttocks. Raise your shoulders and legs from the floor, and keeping your legs as close to the floor as possible, alternate fluttering your legs up and down.'
  },
  {
    title: 'Dead Bug',
    type: 'core',
    workout_id:3,
    filename: 'core_dead-bug.jpg',
    description:
      'Lie on your back. Extend your arms above your and raise your feet from the floor so your calves are parallel to the ground and at a 90-degree angle with your thighs. Extend your right arm back behind you as you also extend and straighten your left leg forward. Draw both your right arm and your left leg to their original positions. Repeat, alternating sides.'
  },
  {
    title: 'Crunch',
    type: 'core',
    workout_id:3,
    filename: 'core_crunch.jpg',
    description:
      'Lie on your back with your knees bent and feet on the floor. Place your hands behind your head with your elbows out to the side. Engaging your abdominals, lift your chest into a crunch position and then lower into your starting position. Repeat.'
  },
  {
    title: 'Side Plank',
    type: 'core',
    workout_id:3,
    filename: 'core_side-plank.jpg',
    description:
      'Lie on your left side with your right leg stacked on your left. Rise into a side plank supported by your left arm (bent at the elbow) and left foot. Hold, and then switch to the opposite side. Alternatively, switch quickly between the two sides.'
  },
  {
    title: 'Leg Raise',
    type: 'core',
    workout_id:3,
    filename: 'core_leg-raise.jpg',
    description:
      'Lie on your back with your legs straight and your hands tucked under you just above the buttocks. Engaging your abdominals, raise your legs until they are perpendicular to the floor. Lower your legs with control and return to your starting position.'
  },
  {
    title: 'Plank',
    type: 'core',
    workout_id:3,
    filename: 'core_plank.jpg',
    description:
      'Hold a plank position, balancing on your feet (or knees) and forearms. Mimic a straight line with your body and keep your core engaged.'
  },
  {
    title: 'Ab Bikes',
    type: 'core',
    workout_id:3,
    filename: 'core_ab-bike.jpg',
    description:
      'Lie on your back and place your hands behind your head with your elbows out. Legs should be straight. Hover your right leg off the floor and bring your left knee to meet your right elbow. Straighten your left leg to hover off the floor as you bring your right knee to meet your left elbow. Repeat.'
  },
  {
    title: 'Heel Taps',
    type: 'core',
    workout_id:3,
    filename: 'core_heel-tap.jpg',
    description:
      'Lie on your back with knees bent and feet planted on the floor. Raise your shoulders off the ground and extend your hands toward your heels. Alternating sides, touch your hands to your heels, activating your obliques.'
  },
  {
    title: 'Straight-Leg Jackknife',
    type: 'core',
    workout_id:3,
    filename: 'core_straight-leg-jackknife.jpg',
    description:
      'Lie on your back with your arms extended along the floor above your head and your legs straightened and hovering just above the floor. Engaging your core, raise both legs as you extend your arms upwards. Raising your chest and shoulders off the floor, try to touch your hands to your feet. Lower your legs, chest, and shoudlers and extend your arms back, returning to your starting position. Repeat.'
  },
  {
    title: 'Hollow Hold',
    type: 'core',
    workout_id:3,
    filename: 'core_hollow-hold.jpg',
    description:
      'Lie on the floor with your legs straightened and your arms extended along the floor above your head. Raise your shoulders and chest from the floor and raise your legs to hover above the floor. Hold for set amount of time. If needed, raise your legs higher or bend your knees to bring your legs closer to your body.'
  },
  {
    title: 'Quads',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_quads.jpg',
    description:
      'Standing on your right leg, draw your left foot to your buttocks and hold with your left hand. Switch sides.'
  },
  {
    title: 'Glutes',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_glutes.jpg',
    description:
      'Lie on the floor with your knees bent and calves parallel to the floor. Cross your right calf across your left thigh. If comfortable, draw your left thigh closer to your body, deepening the stretch in your right glute. Switch sides.'
  },
  {
    title: 'Calves & Hamstrings (Standing)',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_standing-calves-and-hamstrings.jpg',
    description:
      'Start from a seated position with both legs extended in front of you. Bend your right leg so that your right foot touches your left leg at or above the knee. Extend your hands toward your left foot, bending your body over the extended leg. Switch sides.'
  },
  {
    title: 'Calves & Hamstrings (Seated)',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_seated-calves-and-hamstrings.jpg',
    description:
      'Start from a standing position with your feet together. Without bending your knees, bend over extend your hands toward your feet.'
  },
  {
    title: 'Hip Flexors',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_hip-flexors.jpg',
    description:
      'Start from a kneeling position with both knees on the floor. Step your right leg forward and bend the knee to a 90-degree angle. With your hands, carefully push your right knee out to the right. Hold, and switch sides.'
  },
  {
    title: 'Triceps',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_triceps.jpg',
    description:
      'Raise your right hand above your head and bend it at the elbow so that your hand falls toward the center of your back. Hold your right elbow with your left hand and pull it toward the left. Hold, and switch sides.'
  },
  {
    title: 'Shoulders/Deltoids',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_deltoids.jpg',
    description:
      'Extend your right arm straight in front you and then, using your left hand, pull your right arm across your body to the left. Hold, and switch sides.'
  },
  {
    title: 'Back',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_back.jpg',
    description:
      'Lie on your back with your legs extended straight. Bending your right leg, draw your right knee toward your chest. Next, draw your right knee across your body and bring it the floor along your left side, holding it with your left hand if needed. Turn your head to the right, and extend your right arm out to the right. Hold, and switch sides.'
  },
  {
    title: 'Abdominals',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_abs.jpg',
    description:
      'Lie on your stomach. Press your hands into the floor and raise your upper body into a downward-facing dog position. Hold.'
  },
  {
    title: 'Lats',
    type: 'stretch',
    workout_id:4,
    filename: 'stretch_lats.jpg',
    description:
      'Starting from a standing position, extend both arms up above your head. Bend your body to the right, forming the letter C with your body. Hold, and switch sides.'
  }  
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;
