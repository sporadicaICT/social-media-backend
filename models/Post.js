const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database')

class Posts extends Model{}

Posts.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    owner_id:{
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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