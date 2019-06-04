const Sequelize = require('sequelize');
const chalk = require('chalk');


console.log(chalk.yellow("Opening database connection"));


const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boilerMaker', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});


module.exports = db;
