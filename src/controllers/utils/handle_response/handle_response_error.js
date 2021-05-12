module.exports = ({ response, status, message }) => (error) => response.status(status).json({ message, data: { message: error.message } })
