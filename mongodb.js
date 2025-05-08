const{MongoClient}=require('mongodb');
const url="mongodb://localhost:27017"
const database='curd';
const client=new MongoClient(url);

const dbConnect=async()=>{
    const result=await client.connect();
    const db=result.db(database)
    return db.collection('operation')
}
module.exports=dbConnect;