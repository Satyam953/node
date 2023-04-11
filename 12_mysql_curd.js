// const e = require('express');
const mysql = require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'hellonode'
});

db.connect((err)=>{
    if(err){
        console.log('Error',err);
    }else{
        console.log('DB connected');
    }
});
function read(query){
    console.log(typeof query);
    if(typeof query==typeof 1 ){
    db.query('select * from users where id =?',query,(err,res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('result',res);
        }
    });
}
else{
console.log('Invalid  Input');
}    
}

function create(data){
    db.query('INSERT INTO users SET ?',data,(err,res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('result',res);
        }
    });    
}
function updateUserName(userId,firstname,lastname){
    db.query('UPDATE users SET firstname = ?,lastname = ? where id = ?',[firstname,lastname,userId],(err,res)=>{
        if(err){
            console.log(err);
        }else if(res){

            console.log('result',res);
        }
    });    
}
function deleteuser(userId){
    db.query('Delete from users where id=?',userId,(err,res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('result',res);
        }
    });    
}

// read(3);
// create({firstname:'Satyam2',lastname:'Kumar2',usertype:'user',wallet:0});
// updateUserName(2,'Kumar','Satyam');
// deleteuser(2);
