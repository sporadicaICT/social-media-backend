const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('social-media','root','', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = {
    sequelize: sequelize,
}