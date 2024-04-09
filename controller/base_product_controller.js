var product_model = require('../model/base_product_model');

exports.insert_product = async (req, res) => {

    // req.body.image = req.file.originalname;

    var data = await product_model.create(req.body);

    res.status(200).json({
        status: 'insert successfully',
        data
    });

}