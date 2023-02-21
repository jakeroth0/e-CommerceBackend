// establishing our conection with sequelize
const Sequelize = require("sequelize");
require("dotenv").config();
// creating connection to object
// jawsdb is used if we were to ever host the datbase on a cloud server
// a dotenv is required for this to run
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;
