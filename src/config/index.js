const dotenv = require('dotenv')

const validateEnvironmentVariables = (path = './src/config/.env') => {
  dotenv.config({ path: path })

  if (!process.env.DATABASE_CLIENT) {
    throw new Error("Database client doesn't defined")
  }
  if (!process.env.DATABASE_VERSION) {
    throw new Error("Database version doesn't defined")
  }
  if (!process.env.DATABASE_HOST) {
    throw new Error("Database host doesn't defined")
  }
  if (!process.env.DATABASE_USER) {
    throw new Error("Database user doesn't defined")
  }
  if (!process.env.DATABASE_PASSWORD) {
    throw new Error("Database password doesn't defined")
  }
  if (!process.env.DATABASE_NAME) {
    throw new Error("Database name doesn't defined")
  }
}

module.exports = validateEnvironmentVariables
