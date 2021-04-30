module.exports = ({ res, status, message }) => (error) => res.status(status).json({ message, data: error.constraint ?? error })
