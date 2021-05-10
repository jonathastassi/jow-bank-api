const knex = require('knex')

const connectionConfig = (databaseConfig) => ({
  client: databaseConfig.client,
  version: databaseConfig.version,
  connection: {
    host: databaseConfig.host,
    user: databaseConfig.user,
    password: databaseConfig.password,
    database: databaseConfig.databaseName
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
})

module.exports = (databaseConfig) => knex(connectionConfig(databaseConfig))
