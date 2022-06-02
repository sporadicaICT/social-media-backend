const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database')

class Posts extends Model{}

Posts.init({
    id:{
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
    },
    owner_id:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: undefined
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    reposts: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    comments: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    is_repost: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    reposted_by: {
        type: DataTypes.STRING(20),
        allowNull: true
    }

},{
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
})
sequelize.sync();

module.exports = {
    Post: Posts,
}