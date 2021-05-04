const hashBcrypt = require('../../utils/hash_bcrypt')

module.exports = ({ userRepository, accountRepository, database }) => {
  const call = (name, email, password, photo, cellphone) => {
    return database.transaction(async (trx) => {
      const passwordEncripted = hashBcrypt(password)

      const user = await userRepository(trx).create({ name, email, password: passwordEncripted, photo, cellphone })
      await accountRepository(trx).create({ userId: user.id, balance: 0, dailyLimitTransaction: process.env.DAILYLIMITTRANSACTION ?? 500 })
    })
  }

  return {
    call
  }
}
