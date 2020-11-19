"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_model_1 = require("../models/user.model");
class UserService {
    listUsers() {
        return new Promise((resolve, reject) => {
            user_model_1.User.find().then(users => {
                resolve(users);
            });
        });
    }
    getUser(id) {
        return new Promise((resolve, reject) => {
            user_model_1.User.findById(id).then(user => {
                if (user) {
                    resolve(user);
                }
            });
        });
    }
    newUser(body) {
        return new Promise((resolve, reject) => {
            let user = new user_model_1.User(body);
            user.save().then(user => {
                user.password = undefined;
                resolve(user);
            });
        });
    }
    updateUser(id, body) {
        return new Promise((resolve, reject) => {
            const options = { new: true };
            user_model_1.User.findByIdAndUpdate(id, body, options).then(user => {
                if (user) {
                    resolve(user);
                }
            });
        });
    }
}
exports.userService = new UserService();
