
const dataconst = require('./data/const');
const ProductModel = require('./schema/product');
const {mongoosConnect,mongoosDisconnect} = require('./services/mongoos_services');

async function create(querry){
    // let _status = await mongoosConnect();
    // console.log(_status);
    let data = new ProductModel(
        querry
    );
    
    let result = await data.save();
    console.log(result);
    return result;
}




async function readAll(querry){
    // let _status = await mongoosConnect();
    let data = await ProductModel.find(querry);
    console.log(data);
    // mongoosDisconnect();
return data; 
}
async function readOne(req){
    // let _status = await mongoosConnect();
    let data = await ProductModel.findOne(req);
    console.log(data);
    // mongoosDisconnect();
return data; 
}
async function myUpdate(querry,data){
    let _status = await mongoosConnect();
    console.log(_status);
    result =await ProductModel.updateOne(querry,{$set:data});
    console.warn(result);
    return result;
    }
async function myDelete(querry){
    // let _status = await mongoosConnect();
    console.log(querry);
    result = await ProductModel.deleteOne(querry);
    console.warn(result);
    return result;
}


// create({
    // name: 'Satyam',
    // price:199
    // });
// myUpdate({name:'Satyam'},{name:'Kumar'});
// read();
// myDelete({name:'Kumar'});

module.exports= {create,readAll,myUpdate,myDelete,readOne};