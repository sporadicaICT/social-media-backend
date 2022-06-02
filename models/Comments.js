const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database')

class Comments extends Model { }

Comments.init({
    id: {
        type: DataTypes.STRING(15),
        primaryKey: true
    },
    post_id: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner_id: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
},
{
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
})

sequelize.sync();

module.exports = {
    Comments: Comments
}