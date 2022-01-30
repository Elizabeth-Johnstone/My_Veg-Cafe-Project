const { Sequelize } = require("sequelize");
require('dotenv').config()
const databaseURI = process.env.DB_URI

const sequelize = new Sequelize(
  `${databaseURI}`,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
