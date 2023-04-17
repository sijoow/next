import {connectDB} from "@/util/database.js"
import {ObjectId} from 'mongodb'
export default async function handler(res,req){
  if(res.method ==='POST'){
    let 바꿀거 ={
      title: res.body.title,
      content:res.body.content
    }
   const db = (await connectDB).db('forum')
   let result =  await db.collection('post').updateOne({_id : new ObjectId(res.body._id)},
    {$set:바꿀거}
    //res.body >>input안에 넣은 내용을 보내라
   )
   req.status(200).redirect('/list')
  } 
}