const express = require('express');
const app = express();
const multer = require("multer");
const path = require("path");

//storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req, file, cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {fieldSize:100000}
})

app.use('/photo_upload', express.static('upload/images'))

app.post("/upload", upload.single('photo_upload'), (req, res)=>{

    return res.json({
        success: 1,
        profile_url: `http://localhost:4000/profile/${req.file.fieldname}`
    })
})

function errHandler(err,req, res, next){
    if(err instanceof multer.MulterError){
        res.json({
            success: 0,
            message: err.message
        })
    }
}
app.use(errHandler)

app.listen(4000,()=>{
    console.log("server running");
})