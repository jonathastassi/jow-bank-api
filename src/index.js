const validateEnvironmentVariables = require('./config')
validateEnvironmentVariables()

const app = require('./app')

app.listen(3000, () => console.log('SERVER is running'))
