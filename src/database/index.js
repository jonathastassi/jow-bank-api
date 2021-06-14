const connectionConfig = ({
  client: "pg",
  version: "7.2",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "jow_bank_dev"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
})

module.exports = connectionConfig
