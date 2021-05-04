
const { celebrate, Joi, Segments } = require('celebrate')

module.exports = {
  validateRegister: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().max(255),
      email: Joi.string().email().required().max(255),
      password: Joi.string().required().max(255),
      photo: Joi.string().max(255),
      cellphone: Joi.string().max(20)
    })
  }),
  validateLogin: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required().max(255),
      password: Joi.string().required().max(255)
    })
  }),
  validateUpdate: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().max(255),
      email: Joi.string().email().required().max(255),
      password: Joi.string().max(255),
      photo: Joi.string().max(255),
      cellphone: Joi.string().max(20)
    })
  })
}
