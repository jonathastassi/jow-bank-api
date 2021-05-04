exports.up = (knex) => knex.schema.raw(`
  ALTER TABLE accounts
  ADD CONSTRAINT accounts_balance_greater_than_zero
  CHECK ((balance >= (0)::numeric))
`)

exports.down = (knex) => knex.schema.raw(`
  ALTER TABLE accounts
  DROP CONSTRAINT accounts_balance_greater_than_zero
`)
