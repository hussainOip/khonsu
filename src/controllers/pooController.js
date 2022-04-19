const Pool = require('../models/pool')

exports.create = async (req, res) => {
    try {
        const pool = await Pool.create( req.body )
        res.send({ status: 200, success: true, data:pool  })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}

exports.get = async (req, res) => {
    try {
        const pool = await Pool.findById(req.params.id)
        res.send({ status: 200, success: true, data: pool })
    } catch (error) {
        res.send({ status: 500, success: false, message: error.message })
    }
}