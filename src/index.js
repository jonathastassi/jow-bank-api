require('dotenv').config()

const app = require('./app')

app.listen(3000, () => console.log('SERVER is running'))
