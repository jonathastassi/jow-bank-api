
const { celebrate, Joi, Segments } = require('celebrate')

module.exports = {
  validateTransfer: celebrate({
    [Segments.BODY]: Joi.object().keys({
      originEmail: Joi.string().email().required().max(255),
      destinationEmail: Joi.string().email().required().max(255),
      value: Joi.number().required()
    })
  })
}
