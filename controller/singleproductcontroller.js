var product = require('../model/singleproductmodel')

exports.add_single_product = async(req, res) => {
        var data  = await product.create(req.body)

        res.status(200).json({
            status: 'success',
            data
        })
}