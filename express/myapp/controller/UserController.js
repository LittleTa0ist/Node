const UserService = require('../service/UserService')
module.exports = {
    getUser: async (req, res) => {
        // const { username, password } = req.body
        const result = await UserService.getUser()
        res.send({ ok: result })

    },
    addUser: async (req, res) => {
        const { username, password } = req.body
        await UserService.addUser(username, password)
        res.send({ ok: "add" })

    },
    modifyUser: async (req, res) => {
        const { id, username, password } = req.body
        await UserService.modifyUser(id, username, password)
        res.send({ ok: "modify" })

    },
    deleteUser: async (req, res) => {
        const { id } = req.body
        await UserService.deleteUser(id)
        res.send({ ok: "delete" })

    },
    login: async (req, res) => {
        const { username, password } = req.body
        const data = await UserService.login(username, password)
        if (data.length === 0) {
            res.send({ ok: 0 })
        } else {
            req.session.user = true
            res.send({ ok: 1 })
        }

    },
    logout: async (req, res) => {
        req.session.destroy(() => {
            res.send({ ok: 1 })
        })
    }
}