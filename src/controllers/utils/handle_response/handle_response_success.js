module.exports = ({ response, status, message }) => (data) => response.status(status).json({ message, data })
