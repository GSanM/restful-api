import * as restify from 'restify'
import { userService } from '../services/user.service'

class UserController {
    
    listUsers(req, res, next) {
        userService.listUsers()
            .then((users) => {
                res.send(200, users)
            })
            .catch((e) => {
                console.log(e);
                res.send(500, {
                    success: false,
                    message: e.message || "Ocorreu um erro interno",
            })
        })
        return next()
    }

    getUser(req, res, next) {
        userService.getUser(req.params.id)
            .then((user) => {
                res.send(200, user)
            })
            .catch((e) => {
                console.log(e);
                res.send(500, {
                    success: false,
                    message: e.message || "Ocorreu um erro interno",
            })
        })
        return next()
    }
    
    newUser(req, res, next) {
        userService.newUser(req.body)
            .then((user) => {
                res.send(200, user)
            })
            .catch((e) => {
                console.log(e);
                res.send(500, {
                    success: false,
                    message: e.message || "Ocorreu um erro interno",
            })
        })
        return next()
    }

    updateUser(req, res, next) {
        userService.updateUser(req.params.id, req.body)
            .then((user) => {
                res.send(200, user)
            })
            .catch((e) => {
                console.log(e);
                res.send(500, {
                    success: false,
                    message: e.message || "Ocorreu um erro interno",
            })
        })
        return next()
    }
}

export const userController = new UserController()