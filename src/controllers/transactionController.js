const Transaction = require('../models/transaction')

exports.create = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body)
        res.send({ status: 200, success: true, data: transaction })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}

exports.get = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
        res.send({ status: 200, success: true, data: transaction })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}