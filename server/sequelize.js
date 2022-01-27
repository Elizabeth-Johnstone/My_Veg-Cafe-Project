const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    "postgres://crlupcutpkubrv:59d1e485eba617534a0aa9c297d63d3b59eb5aeaf7b34f2190c3d520c851222e@ec2-34-205-46-149.compute-1.amazonaws.com:5432/d308ijjhajlo11",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

module.exports = sequelize