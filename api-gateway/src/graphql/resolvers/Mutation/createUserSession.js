import UsersService from '#root/adapters/UsersService'

const createUserSessionResolver = async (obj, { email, password }, { res }) => {
  const userSession = await UsersService.createUserSession({ email, password })

  // Res in context
  // httpOnly => little bit security - Javascript code can not access all!
  res.cookie('userSessionId', userSession.id, { httpOnly: true })

  return userSession
}

export default createUserSessionResolver
