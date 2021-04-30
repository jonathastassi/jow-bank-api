const dotenv = require('dotenv')
dotenv.config({ path: './src/config/.env' })

const validateEnvironmentVariables = () => {
  if (!process.env.DATABASE_CLIENT) {
    return "Database client doesn't defined"
  }
  if (!process.env.DATABASE_VERSION) {
    return "Database version doesn't defined"
  }
  if (!process.env.DATABASE_HOST) {
    return "Database host doesn't defined"
  }
  if (!process.env.DATABASE_USER) {
    return "Database user doesn't defined"
  }
  if (!process.env.DATABASE_PASSWORD) {
    return "Database password doesn't defined"
  }
  if (!process.env.DATABASE_NAME) {
    return "Database name doesn't defined"
  }
  return true
}

const isValid = validateEnvironmentVariables()

if (isValid !== true) {
  throw new Error(isValid)
}
