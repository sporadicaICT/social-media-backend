const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database')

class User extends Model{}

User.init({
    id:{
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
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