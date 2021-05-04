
exports.up = (knex) => knex.schema
  .createTable('transactions', function (table) {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('origin_id').notNullable().references('id').inTable('accounts')
    table.uuid('destination_id').notNullable().references('id').inTable('accounts')
    table.decimal('value', 14, 2).notNullable()
    table.timestamps(true, true)
  })

exports.down = (knex) => knex.schema.dropTable('transactions')
