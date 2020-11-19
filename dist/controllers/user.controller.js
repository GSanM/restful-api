"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
class UserController {
    listUsers(req, res, next) {
        user_service_1.userService.listUsers()
            .then((users) => {
            res.send(200, users);
        })
            .catch((e) => {
            console.log(e);
            res.send(500, {
                success: false,
                message: e.message || "Ocorreu um erro interno",
            });
        });
        return next();
    }
    getUser(req, res, next) {
        user_service_1.userService.getUser(req.params.id)
            .then((user) => {
            res.send(200, user);
        })
            .catch((e) => {
            console.log(e);
            res.send(500, {
                success: false,
                message: e.message || "Ocorreu um erro interno",
            });
        });
        return next();
    }
    newUser(req, res, next) {
        user_service_1.userService.newUser(req.body)
            .then((user) => {
            res.send(200, user);
        })
            .catch((e) => {
            console.log(e);
            res.send(500, {
                success: false,
                message: e.message || "Ocorreu um erro interno",
            });
        });
        return next();
    }
    updateUser(req, res, next) {
        user_service_1.userService.updateUser(req.params.id, req.body)
            .then((user) => {
            res.send(200, user);
        })
            .catch((e) => {
            console.log(e);
            res.send(500, {
                success: false,
                message: e.message || "Ocorreu um erro interno",
            });
        });
        return next();
    }
}
exports.userController = new UserController();
