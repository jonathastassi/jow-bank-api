const { databaseConfig } = require('../../config')
const database = require('../../database')

const getDatabaseConnection = () => database(databaseConfig)

module.exports = getDatabaseConnection
