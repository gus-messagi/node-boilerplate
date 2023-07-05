import { Router } from 'express'
import { container } from 'tsyringe'
import type UsersController from '../../../presentation/controllers/users.controller'

const controller = container.resolve<UsersController>('UsersController')
const usersRouter = Router()

usersRouter.get('/', controller.findAll)

export { usersRouter }
