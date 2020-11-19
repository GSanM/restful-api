import * as restify from 'restify'
import { Router } from '../common/router'
import { userController } from '../controllers/user.controller'

class UserRouter extends Router {
	
	applyRoutes(app: restify.Server) {

		app.get('/users', userController.listUsers)
		app.get('/users/:id', userController.getUser)
		app.post('/users', userController.newUser)
		app.patch('/users/:id', userController.updateUser)
	}
}

export const userRouter = new UserRouter()
