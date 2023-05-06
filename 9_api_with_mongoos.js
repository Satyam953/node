const express = require('express');
const ProductModel = require('./schema/product');
const productcontroller = `require('./8_mongoos_curd');1`
const {mongoosConnect,mongoosDisconnect}= require('./services/mongoos_services');
const app = express();

app.use(express.json());
// app.use();
mongoosConnect().then((v)=>{
    console.log(v.STATES);
});

app.get('/',async (req,resp)=>{
    resp.send('Welcome To CURD')
    });
    
app.get('/read',async (req,resp)=>{
    resp.send(await productcontroller.readAll());
});

app.get('/read/:name',async (req,resp)=>{
    let result = await productcontroller.readOne({name:req.params.name});
    resp.send(result);
});

app.post('/create',async (req,resp)=>{
    // const data = await mongoosConnect();
    let result = await productcontroller.create(req.body);
    resp.send(result);
});

app.put('/update/:name',async (req,resp)=>{
    let result = await productcontroller.myUpdate({name:req.params.name},req.body);
    resp.send(result);
});

app.delete('/deleteProduct/:name',async (req,resp)=>{
    let result = await productcontroller.myDelete({name:req.params.name});
    resp.send(result);
});

app.listen(4200, () =>
    console.log(`App is running on port:${4200}`)
);
