    const express = require('express');
    const ProductModel = require('./schema/product');
    const productcontroller = require('./8_mongoos_curd');
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
        
    app.post('/search/:key',async (req,resp)=>{
        resp.send(await productcontroller.readAll(
            {
                $or:[
                    {"name":{$regex:req.params.key}},
                    {"method":{$regex:req.params.key}}
                ]
            }));
    });

    app.listen(4200, () =>
        console.log(`App is running on port:${4200}`)
    );
