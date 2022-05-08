const { DataTypes } = require('sequelize')
const { db } = require('../config/database')

const Post = db.define('Post', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    number: {
        type: DataTypes.STRING,
    },
    visit: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    vaccines: {
        type: DataTypes.INTEGER
    },
}, {
    db,
    modelName: 'Post'
}) 

module.exports = Post;
