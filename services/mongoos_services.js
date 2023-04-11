const {model,Schema,connect,disconnect} = require('mongoose');
const helloconst = require('../data/const');

///connect db = helloworld
async function mongoosConnect(){
    return    await connect(helloconst.dburl+'/'+helloconst.dbname);
}

function mSchema(data){
    return Schema(data);
}


function mModel(collectionName,collSchema){
    return model(collectionName,collSchema);
}
async function mongoosDisconnect(){
    return    disconnect(helloconst.dburl+'/'+helloconst.dbname);
}

module.exports = {mongoosConnect,mSchema,mModel,mongoosDisconnect};