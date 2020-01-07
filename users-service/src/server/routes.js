import { User } from '#root/db/models'
import generateUUID from '#root/helpers/generateUUIDV4'
import { hashPassword, passwordCompareSync } from '#root/helpers/handlePassword'

const setupRoutes = app => {
  app.post('/users', async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      return next(new Error('Invalid body!'))
    }

    try {
      const newUser = await User.create({
        email: req.body.email,
        id: generateUUID(),
        passwordHash: hashPassword(req.body.password),
      })

      return res.json(newUser)
    } catch (e) {
      return next(e)
    }
  })
}

export default setupRoutes
