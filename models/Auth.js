const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database')

class Auth extends Model { }

Auth.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
    },
    user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
},
{
    sequelize,
    modelName: 'Auth',
    tableName: 'auth'
})

sequelize.sync();

module.exports = {
    Auth: Auth
}