import { User } from '../models/user.model'

class UserService {

    listUsers(): Promise<any> {
        return new Promise((resolve, reject) => {
            User.find().then(users => {
                resolve(users)
            })
        })
    }

    getUser(id): Promise<any> {
        return new Promise((resolve, reject) => {
            User.findById(id).then(user => {
                if (user) {
                    resolve(user)
                }
            })
        })
    }

    newUser(body): Promise<any> {
        return new Promise((resolve, reject) => {
            let user = new User(body)
            user.save().then(user => {
                user.password = undefined
                resolve(user)
            })
        })
    }

    updateUser(id, body): Promise<any> {
        return new Promise((resolve, reject) => {
            const options = { new: true }
            User.findByIdAndUpdate(id, body, options).then(user => {
                if (user) {
                    resolve(user)
                }

            })
        })
    }
}

export const userService = new UserService()