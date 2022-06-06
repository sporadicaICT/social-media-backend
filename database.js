const { Sequelize } = require('sequelize');
const {
  database: { username, password, host },
} = require("./config");
const sequelize = new Sequelize("social_media", username, password, {
  host: host,
  dialect: "mysql",
});

module.exports = {
    sequelize: sequelize,
}