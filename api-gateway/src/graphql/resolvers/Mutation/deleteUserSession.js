import UsersService from '#root/adapters/UsersService'

const deleteUserSessionResolver = async (obj, { sessionId }, { res }) => {
  await UsersService.deleteUserSession({ sessionId })

  res.clearCookie('userSessionId')

  return true
}

export default deleteUserSessionResolver
