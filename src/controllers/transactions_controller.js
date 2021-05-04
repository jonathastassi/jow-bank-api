
const database = require('../database')
const userRepository = require('../repositories/user_repository')
const accountRepository = require('../repositories/account_repository')
const transactionRepository = require('../repositories/transaction_repository')

const handleResponseSuccess = require('./utils/handle_response_success')
const handleResponseError = require('./utils/handle_response_error')

const transfer = require('../domains/commands/transactions/transfer')({ userRepository, accountRepository, transactionRepository, database })

module.exports = {
  transfer: (req, res) => {
    const { originEmail, destinationEmail, value } = req.body
    const userId = req.userId

    transfer.call(userId, originEmail, destinationEmail, value)
      .then(handleResponseSuccess({ res, status: 201, message: 'Successful transfer' }))
      .catch(handleResponseError({ res, status: 500, message: 'Error on tranfer' }))
  }
}
