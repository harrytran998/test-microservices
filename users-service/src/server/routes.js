import { User, UserSession } from '#root/db/models'
import generateUUID from '#root/libs/generateUUIDV4'
import { hashPassword, passwordCompareSync } from '#root/libs/handlePassword'
import { addHours } from 'date-fns'

const USER_SESSION_EXPIRY_HOURS = 1

const setupRoutes = app => {
  app.get('/users', async (req, res, next) => {
    const users = await User.findAll()
    if (users.length > 0) {
      return res.json(users)
    }
    return res.json({ message: 'Dont have any user!' })
  })

  app.post('/users', async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return next(new Error('Invalid body!'))
    }

    try {
      const newUser = await User.create({
        id: generateUUID(),
        email: req.body.email,
        password: hashPassword(req.body.password),
      })

      return res.json(newUser)
    } catch (e) {
      return next(e)
    }
  })

  app.post('/sessions', async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return next(new Error('Invalid body!'))
    }

    try {
      const user = await User.findOne({ attributes: {}, where: { email: req.body.email } })

      if (!user) return next(new Error('Invalid email!'))

      if (!passwordCompareSync(req.body.password, user.password)) {
        return next(new Error('Incorrect password!'))
      }

      const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS)

      const sessionToken = generateUUID()

      const userSession = await UserSession.create({
        id: sessionToken,
        userId: user.id,
        expiresAt,
      })

      return res.json(userSession)
    } catch (e) {
      return next(e)
    }
  })
}

export default setupRoutes
