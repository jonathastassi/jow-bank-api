module.exports = ({ res, status, message }) => (data) => res.status(status).json({ message, data })
