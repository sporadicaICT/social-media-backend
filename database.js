const { Sequelize } = require('sequelize');
const {
  database: { username, password },
} = require("./config");
const sequelize = new Sequelize("social_media", username, password, {
  host: database.host,
  dialect: "mysql",
});

module.exports = {
    sequelize: sequelize,
}