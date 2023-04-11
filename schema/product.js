const dbServices= require('../services/mongoos_services');
const dataconst = require('../data/const');

module.exports= dbServices.mModel(
    dataconst.coll_helloworld,
    dbServices.mSchema(
        {
            name : String,
            price: Number
        }
    )
); 
