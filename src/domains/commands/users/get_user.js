module.exports = (repository) => {
  const call = async (userId) => {
    const { id, name, email, photo, cellphone } = await repository.findBy({ field: 'id', value: userId })

    if (id == null || email == null) {
      throw new Error('User not found')
    }

    return {
      id, name, email, photo, cellphone
    }
  }

  return {
    call
  }
}
