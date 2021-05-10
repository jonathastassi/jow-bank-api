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
  return errors
}

const isValid = validateEnvironmentVariables()

if (isValid.length) {
  throw new Error(`Os campos (${isValid.join(', ')}) não foram setados`)
}
