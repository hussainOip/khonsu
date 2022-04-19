const User = require('../models/user')

exports.create = async (req, res) => {
    try {
        const user = await User.create({ walletAddress: req.body })
        res.send({ status: 200, success: true, data: user })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}

exports.get = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.send({ status: 200, success: true, data: user })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}