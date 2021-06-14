const { databaseConfig } = require('../../config')
const database = require('../../database')
const knex = require('knex')

const getDatabaseConnection = () => knex(database)

module.exports = getDatabaseConnection
