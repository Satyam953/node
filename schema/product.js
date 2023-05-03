const dbServices= require('../services/mongoos_services');
const dataconst = require('../data/const');

module.exports= dbServices.mModel(
    dataconst.table_product,
    dbServices.mSchema(
        {
            name : String,
            price: Number
        }
    )
); 
