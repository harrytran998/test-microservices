const userSessionResolver = async (obj, args, { res }) => {
  if (args.me !== true) throw new Error('Unsupported argument value')
  return res.locals.userSession
}

export default userSessionResolver
