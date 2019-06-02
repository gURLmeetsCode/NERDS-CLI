const db = require('../_db')
const User = require('./Users')
const Pet = require('./Pets')


// ASSOCIATIONS
Pet.belongsTo(User)
User.hasMany(Pet)



module.exports = {
  User,
  Pet,
  db
}
