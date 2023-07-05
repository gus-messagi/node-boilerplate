import { container, instanceCachingFactory } from 'tsyringe'
import UserController from '../../presentation/controllers/user.controller'

container.register('UserController', {
  useFactory: instanceCachingFactory<UserController>(c => {
    return new UserController()
  })
})
