//call stack | node Api | callback queue

//call stack : our main 
//node api : will exicute after all the stack will be empty

console.log('First');


//c/c++ api 
setTimeout(()=>{
    console.log('second');
},2000);

setTimeout(()=>{
    console.log('third');
},0);

setTimeout(()=>{
    console.log('fourth');
},1000);


setTimeout(()=>{
    console.log('fifth');
},3000);


setTimeout(()=>{
    console.log('Sixth');
},320);


console.log('last')