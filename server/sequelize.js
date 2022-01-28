const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_URI } = process.env.DB_URI;

const sequelize = new Sequelize(DB_URI, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
