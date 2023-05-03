const express = require('express');

const app = express();
app.get('',(req,res)=>{res.send('Welcome, Home Page')});
// app.get('',(req,res)=>{res.sendFile('File path.extenson')});
app.get('/help',(req,res)=>{res.send('Help Desk')});
app.get('/about',(req,res)=>{res.send('Welcome, about us')});
app.get('*',(req,res)=>{res.send('Page Not found')});

app.listen(4200, () =>
    console.log(`App is running on port:${4200}`)
);
