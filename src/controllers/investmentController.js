const Investment = require('../models/investment')

exports.create = async (req, res) => {
    try {
        const investment = await Investment.create(req.body)
        res.send({ status: 200, success: true, data: investment })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}

exports.get = async (req, res) => {
    try {
        const investment = await Investment.findById(req.params.id)
        res.send({ status: 200, success: true, data: investment })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}