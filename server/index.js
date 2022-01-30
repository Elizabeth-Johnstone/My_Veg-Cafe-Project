const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require("./sequelize");
const bcrypt = require("bcrypt");

// Middleware
app.use(express.json());
app.use(cors());

// Endpoints

app.get("/recipes", async (req, res) => {
  const validUsers = await sequelize
    .query(`SELECT * FROM recipes`)
    .catch((error) => console.log(error));
  res.status(200).send(validUsers);
});

app.post("/signup", async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  const checkUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'
    `);
  if (checkUser[1].rowCount !== 0) {
    res.status(401).send("Username already exists");
  } else {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    await sequelize.query(`
        INSERT INTO users(firstName, lastName, username, email, password)
        VALUES (
            '${firstName}',
            '${lastName}',
            '${username}',
            '${email}',
            '${passwordHash}'
            )
        `);
    const userInfo = await sequelize.query(`
            SELECT user_id, firstName, lastName, username, email
            FROM users
            WHERE username = '${username}'
        `);
    res.status(200).send(userInfo);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const validUser = await sequelize
    .query(
      `
    SELECT * FROM users
    WHERE username = '${username}'
    `
    )
    .catch((error) => console.log(error));

  if (validUser[1].rowCount === 1) {
    if (bcrypt.compareSync(password, validUser[0][0].password)) {
      let object = {
        id: validUser[0][0].user_id,
        firstname: validUser[0][0].firstname,
        lastname: validUser[0][0].lastname,
        username,
        email: validUser[0][0].email,
      };
      res.status(200).send(object);
    } else {
      res.status(401).send("Password is incorrect");
    }
  } else {
    res.status(401).send("Username is incorrect");
  }
});

sequelize.authenticate();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
