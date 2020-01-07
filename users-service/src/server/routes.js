import { User } from '#root/db/models'
import generateUUID from '#root/libs/generateUUIDV4'
import { hashPassword, passwordCompareSync } from '#root/libs/handlePassword'

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
}

export default setupRoutes
