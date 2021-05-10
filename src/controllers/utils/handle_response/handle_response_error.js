module.exports = ({ response, status, message }) => (error) => response.status(status).json({ message, data: error.constraint ?? error })
