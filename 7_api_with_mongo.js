const dbservices = require('./6_db_mongo_curd');
const express = require('express');
const app = express();
const dataconst = require('./data/const');
app.use(express.json());
app.get('/',async(req,resp)=>{
    // console.log(req.query);
    let data = await dbservices.getData(req.query);
    resp.send(data);
});

app.post('/',async(req,resp)=>{
   let data = await dbservices.myInsert(req.body);
//    console.log(data);
    
   resp.send(data);
});

app.put('/',async(req,resp)=>{
    
    let data = await dbservices.myUpdate(req.query,req.body);
    // console.log(req.query);
    // console.log(req.body);
    
   resp.send(data);
});
app.put('/:name',async(req,resp)=>{
    
    let data = await dbservices.myUpdate({name: req.params.name},req.body);
    // console.log(req.query);
    // console.log(req.body);
    
   resp.send(data);
});


app.delete('/',async(req,resp)=>{
    let data = await dbservices.myDelete(req.query);
resp.send(data);
});
app.delete('/:id',async(req,resp)=>{
    // console.log(dbservices.convertidObjIdtoId(req.params.id));
    let data = await dbservices.myDelete({_id:dbservices.convertidObjIdtoId(req.params.id)});
resp.send(data);
});


app.listen(4200);