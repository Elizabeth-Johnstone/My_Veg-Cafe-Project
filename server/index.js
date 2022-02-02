const express = require("express");
const cors = require("cors");
// const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require("./sequelize");
const bcrypt = require("bcrypt");

// Middleware
app.use(express.json());
app.use(cors());

// Endpoints

// Displays all recipes in Recipes list
app.get("/recipes", async (req, res) => {
  const allRecipes = await sequelize.query(`SELECT * FROM recipes`);
  res.status(200).send(allRecipes);
});

// Allows users to add and remove recipes from favorites list by clicking the heart icon
app.post("/add-remove-favorite", async (req, res) => {
  const { user_id, recipe_id } = req.body;
  const checkFave = await sequelize.query(`
      SELECT * FROM favorites WHERE user_id = '${user_id}' AND  recipe_id = '${recipe_id}'
  `);
  if (checkFave[1].rowCount !== 0) {
    await sequelize.query(`	
      DELETE FROM favorites
      WHERE user_id = '${user_id}'
      AND recipe_id = '${recipe_id}';`);
    res.status(200).send();
  } else {
    await sequelize.query(
      `INSERT INTO favorites (user_id, recipe_id) VALUES ('${user_id}', '${recipe_id}'  )`
    );
    const faveInfo = await sequelize.query(`
      SELECT name FROM recipes WHERE recipe_id = '${recipe_id}'`);
    res.status(200).send(faveInfo);
  }
});

// Displays favorited recipes in Favorites list
app.post("/favorites", async (req, res) => {
  const { user_id } = req.body;
  const allFaves = await sequelize.query(`
      SELECT recipes.recipe_id, recipes.name, recipes.url_path, recipes.img_src, recipes.img_alt
      FROM recipes, favorites
      WHERE favorites.user_id = '${user_id}'
      AND favorites.recipe_id = recipes.recipe_id
      `);
  res.status(200).send(allFaves);
});

// Allows users to create an account with an encrypted password and checks that username and email are available
app.post("/signup", async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  const checkUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}' OR email = '${email}'
    `);
  if (checkUser[1].rowCount !== 0) {
    res.status(401).send();
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

// Allows users to log in and notifies users if password or username is incorrect
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
