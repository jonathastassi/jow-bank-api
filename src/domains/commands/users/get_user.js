const call = (userRepository) => async (userId) => {
  const { id, name, email, photo, cellphone } = await userRepository.findBy({ field: 'id', value: userId })

  if (id == null || email == null) {
    throw new Error('User not found')
  }

  return {
    id, name, email, photo, cellphone
  }
}

module.exports = (userRepository) => ({
  call: call(userRepository)
})
