
exports.up = (knex) => knex.schema
  .alterTable('accounts', function (table) {
    table.timestamps(true, true)
  })

exports.down = (knex) => {}
