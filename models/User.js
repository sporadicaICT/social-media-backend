const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database')

class User extends Model{}

User.init({
    id:{
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    followers:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    following:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    posts:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

},{
    sequelize,
    modelName: 'User',
    tableName: 'users'
})

sequelize.sync();

module.exports = {
    User: User
}