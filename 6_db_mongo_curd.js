const {MongoClient, ObjectId} = require('mongodb');
const data = require('./data/data');
const dataconst = require('./data/const');
const client =new  MongoClient(dataconst.dburl);

async function connectDbAndGetCollection(cname){
let result = await client.connect();
let db = result.db(dataconst.dbname);

return db.collection(cname);
  // let response = await collections.find({}).toArray();
// console.log(response);
}


//Promis pending
// console.log(dbConnection());

//2 ways tp handle promis
//1 Promis
    // connectDb().then((_db)=>{
    //     _db.find({name:'news'}).toArray().then((v)=>{
    //     console.log(v)  
    //     })
    // });

// 2nd 
async function getData(querry){
    let tboltapis = await connectDbAndGetCollection(dataconst.coll_helloworld);
    
    // result =await tboltapis.find().toArray();
    // result =await tboltapis.find({name:name}).toArray();
    let result =await tboltapis.find(querry).toArray();
    console.warn(result);
    return result;
    }
 async function myInsert(data){
       let tboltapis = await connectDbAndGetCollection(dataconst.coll_helloworld);
     let result=   await tboltapis.insertOne(
      //   {
      //   // "_id":"e6-e85b-4db5-96ff-0c64296e344b7f",
      //   "colId":"1ada9d69725-ea91-4789-a213-aA3229ce3e96",
      //   "containerId":"",
      //   "name":"get_assadio_songs",
      //   "url":"http://zemermusic.com/usertions",
      //   "method":"GET",
      //   "sortNum":33,
      //   "created":"2022-04-12T05:46:30.211Z",

      //  }
      data
       );
       return result;
      // .then((v)=>{
      //   if(v.acknowledged)
      //   {
      //        console.log('Inserted');
      //       }
      //   else{
      //       console.log('not inserted');
      //   }
      //   return v.acknowledged;
      //   });
    //    if(_status) 
    }
  async function myUpdate(querry,data){
            let tboltapis = await connectDbAndGetCollection(dataconst.coll_helloworld);
            
            // result =await tboltapis.updateOne({name:name},{$set:{sortNum:3300,url:'www.google.com'}});
            result =await tboltapis.updateOne(querry,{$set:data});
            console.warn(result);
            return result;
            }
    async function myDelete(querry){
               let tboltapis = await connectDbAndGetCollection(dataconst.coll_helloworld);
                
              //  result =await tboltapis.deleteOne({name:name});
               result =await tboltapis.deleteOne(querry);
               console.warn(result);
                return result;
                }
// getData('news');
// myInsert('hhHh');
// myUpdate('news');
// myDelete('get_assadio_songs');
function convertidObjIdtoId(id){
  return new ObjectId(id);
}

module.exports ={getData,myDelete,myInsert,myUpdate,convertidObjIdtoId};