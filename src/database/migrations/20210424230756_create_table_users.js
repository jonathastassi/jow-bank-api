
exports.up = (knex) => knex.schema
  .createTable('users', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.string('name', 255).notNullable()
    table.string('email', 255).notNullable()
    table.unique('email')
    table.string('password', 255).notNullable()
    table.string('photo', 255)
    table.string('cellphone', 20)
  })

exports.down = (knex) => knex.schema.dropTable('users')
