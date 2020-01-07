import bcrypt from 'bcryptjs'

export const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const passwordCompareSync = (inputPassword, passwordHash) =>
  bcrypt.compareSync(inputPassword, passwordHash)
