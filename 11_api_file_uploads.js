const express = require('express');
const app = express();

const upload = require('./middelware/multer')
app.get('/',async (req,resp)=>{
    resp.send('Welcome To CURD')
    });
    
app.post('/upload',upload.single('photo_file'),async (req,resp)=>{
    const host = req.hostname;
const filePath = req.protocol + "://" + host + '/' + req.file.destination+'/'+req.file.filename;
console.log(filePath);    
if (!req.file) {
        console.log("No file received");
        return resp.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return resp.send({
          success: true
        })
      }
      
});

app.listen(4200, () =>
    console.log(`App is running on port:${4200}`)
);
