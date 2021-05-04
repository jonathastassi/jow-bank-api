
exports.up = (knex) => knex.schema
  .alterTable('accounts', function (table) {
    table.unique('user_id')
  })

exports.down = (knex) => knex.schema
  .alterTable('accounts', function (table) {
    table.dropUnique('user_id')
  })
