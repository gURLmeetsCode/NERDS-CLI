const Sequelize = require('sequelize');
const db = require('../_db');


const Pet = db.define('pet', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});


Pet.getPetAge = function(bday){
  const birthday = await Pet.find({
   where:{
     birthday: bday
   }
 })
 let age = Date.now() - birthday.getTime();
 return age
}




module.exports = Pet
