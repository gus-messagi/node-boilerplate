import { Router } from 'express'
import { usersRouter } from './users.route'

const mainRouter = Router()

mainRouter.use('/users', usersRouter)

export { mainRouter }
