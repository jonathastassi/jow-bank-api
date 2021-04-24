module.exports = {
  development: {
    client: 'pg',
    version: '7.2',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'jow_banking_dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  staging: {
    client: 'pg',
    version: '7.2',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'jow_banking_staging'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    version: '7.2',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'jow_banking_prod'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
