const validateEnvironmentVariables = () => {
  const errors = []
  if (!process.env.DATABASE_CLIENT) {
    errors.push('DATABASE_CLIENT')
  }
  if (!process.env.DATABASE_VERSION) {
    errors.push('DATABASE_VERSION')
  }
  if (!process.env.DATABASE_HOST) {
    errors.push('DATABASE_HOST')
  }
  if (!process.env.DATABASE_USER) {
    errors.push('DATABASE_USER')
  }
  if (!process.env.DATABASE_PASSWORD) {
    errors.push('DATABASE_PASSWORD')
  }
  if (!process.env.DATABASE_NAME) {
    errors.push('DATABASE_NAME')
  }
  if (!process.env.SECRET) {
    errors.push('SECRET')
  }
  if (!process.env.DAILYLIMITTRANSACTION) {
    errors.push('DAILYLIMITTRANSACTION')
  }
  return errors
}

const checkEnvironmentVariables = (errors) => {
  if (errors.length) {
    throw new Error(`Os campos (${errors.join(', ')}) não foram setados`)
  }
}

const getConfigDatabase = () => {
  const errors = validateEnvironmentVariables()
  checkEnvironmentVariables(errors)

  return {
    client: process.env.DATABASE_CLIENT,
    version: process.env.DATABASE_VERSION,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    databaseName: process.env.DATABASE_NAME
  }
}

const getConfigBusiness = () => {
  const errors = validateEnvironmentVariables()
  checkEnvironmentVariables(errors)

  return {
    dailyLimitTransaction: process.env.DAILYLIMITTRANSACTION
  }
}

const getConfigSecurity = () => {
  const errors = validateEnvironmentVariables()
  checkEnvironmentVariables(errors)

  return {
    secret: process.env.SECRET,
    validation_token_in_seconds: process.env.VALIDATION_TOKEN_IN_SECONDS || 1200
  }
}

module.exports = {
  databaseConfig: getConfigDatabase(),
  businessConfig: getConfigBusiness(),
  securityConfig: getConfigSecurity()
}
