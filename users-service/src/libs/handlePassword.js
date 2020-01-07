import bcrypt from 'bcryptjs'

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

const passwordCompareSync = (inputPassword, passwordHash) =>
  bcrypt.compareSync(inputPassword, passwordHash)

export default {
  hashPassword,
  passwordCompareSync,
}
