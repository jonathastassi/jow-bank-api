
exports.up = (knex) => knex.schema
  .createTable('accounts', function (table) {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('user_id').notNullable().references('id').inTable('users')
    table.decimal('balance', 14, 2).notNullable()
    table.decimal('daily_limit_transaction', 14, 2).notNullable()
  })

exports.down = (knex) => knex.schema.dropTable('accounts')
