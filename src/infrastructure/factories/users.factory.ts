import { container, instanceCachingFactory } from 'tsyringe'
import UsersController from '../../presentation/controllers/users.controller'

container.register('UsersController', {
  useFactory: instanceCachingFactory<UsersController>(c => {
    return new UsersController()
  })
})
