const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Schedule = require('./Schedule');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

User.hasMany(Schedule,{
 onDelete:'cascade'
})
Schedule.belongsTo(User,{
  foreignKey:'user_id'
})

Painting.belongsToMany(User,{
  through:Schedule,
  foreignKey:'painting_id'
})


module.exports = { User, Gallery, Painting,Schedule };
