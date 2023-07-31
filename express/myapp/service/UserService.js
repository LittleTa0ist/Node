const UserModel = require('../model/userModel')
module.exports = {
    getUser: () => {
        return UserModel.find({})
    },
    addUser: (username, password) => {
        return UserModel.create({
            username,
            password
        })
    },
    modifyUser: (id, username, password) => {
        return UserModel.updateOne({
            _id:id
        }, {
            username, password
        })
    },
    deleteUser: (id) => {
        return UserModel.deleteOne({ _id:id })
    },
    login: (username, password) => {
        return UserModel.find({username, password })
    }
}