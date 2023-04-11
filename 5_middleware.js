const express = require('express');

const app = express();
app.listen(4200);
//Middleware are 2 type 
//1st way App Lavel  middleware (Applies globaly)
//The only difference is how they are bound
// The application-level middleware, as explained in How to Use Application-Level Middleware with Express. js and TypeScript, is bound to the whole application
    const reqFilter=(req,res,next)=>{
    console.log('reqFilter');
    //when useing filter show use next inside unless will keep loading
    if(!req.query.age){
        res.send('Please Provide Page')
    }
    else if(req.query.age<18){
        res.send('You can not Access')
    }else{
        next(); 
    }
    }
    // app.use(reqFilter);
//or
    // app.get('/',reqFilter,(req,resp)=>{
    //     resp.send('Welcome Home');
    // });

    
//2 route level (Apply globaly, single,and with groups)
//router-level middleware is bound to an instance of a router or Express
const route = express.Router();
    route.use(reqFilter);
    app.get('/',(req,resp)=>{
        resp.send('Welcome Home');
    });
    route.get('/user',(req,resp)=>{
        resp.send('Users page');
    });

    app.use('/',route);
    




