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


global.setTimeout(()=>{
    console.log('fifth');
},3000);


setTimeout(()=>{
    console.log('Sixth');
},320);


console.log('last')


//GLobal
    // global, document,window,    __dirname    __filename

    console.log(__dirname);//dir path
    console.log(__filename); 