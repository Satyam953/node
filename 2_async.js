//Async Programing
const a = 10;
let b = 2;

let wdata = new Promise((res,err)=>{
    setTimeout(()=>{
        res(4);
    },3000);
});

wdata.then((v)=>{
    b=b+v;
    console.log(b);
});
