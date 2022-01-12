const User = require('./User');
const Equipment = require('./Equipment');
const Muscle = require('./Muscle');
const Workout = require('./Workout');
const WorkoutEquipment =require('./WorkoutEquipment')
const Saved =require('./Saved')
//workouts belongsTo a Muscle group
Workout.belongsTo(Muscle, {
  foreignKey: 'muscle_id',
});
//A Muscle group has many workouts
Muscle.hasMany(Workout, {
  foreignKey: 'muscle_id',
});
// workouts belongsToMany Equipment (through workoutequipment)
Workout.belongsToMany(Equipment,{
  through:WorkoutEquipment,
  foreignKey: 'workout_id'
});
//equipment belongsToMany workouts(through workoutequipment)
Equipment.belongsToMany(Workout, {
  through:WorkoutEquipment,
  foreignKey: 'equipment_id'
});
Workout.hasMany(WorkoutEquipment,{
  foreignKey:'workout_id'
});
WorkoutEquipment.belongsTo(Workout,{
  foreignKey:'workout_id'
});

Workout.belongsToMany(User,{
  through: Saved,
  as:'saved_workout',
  foreignKey:'workout_id',
  onDelete:'SET NULL'
})

Saved.belongsTo(User,{
  foreignKey:'user_id',
  onDelete:"SET NULL"
})

Saved.belongsTo(Workout,{
  foreignKey:'workout_id',
  onDelete:'SET NULL'
})

User.hasMany(Saved,{
  foreignKey:'user_id'
})

Workout.hasMany(Saved,{
  foreignKey:'post_id'
})


module.exports = { User,Workout,Muscle,Equipment, WorkoutEquipment,Saved };
