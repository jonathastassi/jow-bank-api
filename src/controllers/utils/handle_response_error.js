module.exports = (message, data) => {
  return { message, data: data.constraint ?? data }
}
