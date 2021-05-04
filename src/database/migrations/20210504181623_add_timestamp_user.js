
exports.up = (knex) => knex.schema
  .alterTable('users', function (table) {
    table.timestamps(true, true)
  })

exports.down = (knex) => {}
