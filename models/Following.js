const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database')

class Following extends Model { }

Following.init({
    serial_num: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING,
    },
    following_id: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'Following',
    tableName: 'following',
})

module.exports = {
    Following: Following,
}