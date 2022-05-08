const { Sequelize } = require('sequelize');
require('dotenv').config()

// Configuring DB info
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: console.log,
})

// Connecting DB with async
const connect = async () => {
    try {
        await db.authenticate();
        console.log('Successfully connected to DB')
    } catch (error) {
        console.error('Unable to connect:', error.message)
    }
}

exports.connect = connect;