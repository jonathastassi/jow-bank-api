const registerUserFactory = require('../../../../src/domains/commands/users/register_user')
const hashBcrypt = require('../../../../src/domains/utils/hash_bcrypt')

jest.mock('../../../../src/domains/utils/hash_bcrypt')

describe('Command - Register User', () => {
  describe('call', () => {
    describe('Success Create', () => {
      const newCreatedUserMock = {
        name: 'Jow'
      }

      const userRepositoryMock = {
        create: jest.fn().mockResolvedValue(newCreatedUserMock)
      }

      const newUserFake = {
        name: 'Jow',
        email: 'eita@eit22sa2332.com',
        password: '123456',
        photo: '-',
        cellphone: '123123'
      }

      const encryptedPasswordFake = 'encrypted password'

      let result

      beforeAll(async () => {
        hashBcrypt.mockReturnValue(encryptedPasswordFake)
        result = await registerUserFactory(userRepositoryMock).call(newUserFake)
      })

      it('should encrypt user password', () => {
        expect(hashBcrypt).toBeCalledTimes(1)
        expect(hashBcrypt).toBeCalledWith(newUserFake.password)
      })

      // test('')
      it('should create a new user in the database', () => {
        expect(userRepositoryMock.create).toBeCalledTimes(1)
        expect(userRepositoryMock.create).toBeCalledWith({
          ...newUserFake,
          password: encryptedPasswordFake
        })
      })

      it('should return the new user', () => {
        expect(result).toEqual(newCreatedUserMock)
      })

      afterAll(() => {
        jest.resetAllMocks()
        jest.restoreAllMocks()
      })
    })
  })
})
