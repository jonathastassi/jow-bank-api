const { registerUser } = require('../../../../../jow-bank-api/src/domains/commands/users')

describe('Command - Register User', () => {
  describe('call', () => {
    describe('Success Create', () => {
      const userRepositoryMock = jest.fn(
        {
          create: jest.fn()
        }
      )

      const newUserFake = {
        name: 'Jow',
        email: 'eita@eit22sa2332.com',
        password: '123456',
        photo: '-',
        cellphone: '123123'
      }

      let result
      beforeAll(() => {
        result = registerUser(userRepositoryMock).call(newUserFake)
      })

      // test('')
      it('Should call userRepository.create', () => {
        expect(userRepositoryMock.create).toBeCalledTimes(1)
      })
    })
  })
})
