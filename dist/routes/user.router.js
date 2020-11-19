"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const router_1 = require("../common/router");
const user_controller_1 = require("../controllers/user.controller");
class UserRouter extends router_1.Router {
    applyRoutes(app) {
        app.get('/users', user_controller_1.userController.listUsers);
        app.get('/users/:id', user_controller_1.userController.getUser);
        app.post('/users', user_controller_1.userController.newUser);
        app.patch('/users/:id', user_controller_1.userController.updateUser);
    }
}
exports.userRouter = new UserRouter();
