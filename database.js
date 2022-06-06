const { Sequelize } = require('sequelize');
var sequelize = undefined;

if(process.env.HEROKU_POSTGRESQL_BRONZE_URL){

    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
        host: process.env.DATABASE_URL || 'postgresql-aerodynamic-02839',
        dialect: 'postgres',
        protocol: 'postgres'
    });


} else {
    sequelize = new Sequelize('social-media','root','', {
        host: 'localhost',
        dialect: 'mysql',
    });
}



module.exports = {
    sequelize: sequelize,
}