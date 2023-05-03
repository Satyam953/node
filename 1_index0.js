// const http = require('http');
// const data = require('./data/data')
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4500);

const fs = require('fs');

const input = process.argv;

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3],input[4]);
}else{
    console.log('Invalid Input');
    // fs.writeFileSync(input[3],input[4]);
}