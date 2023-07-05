import { Router } from 'express'
import { container } from 'tsyringe'
import type UserController from '../../../presentation/controllers/user.controller'

const controller = container.resolve<UserController>('UserController')
const userRouter = Router()

userRouter.get('/', controller.findAll)

export { userRouter }
