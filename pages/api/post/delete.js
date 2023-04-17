
import {connectDB} from "@/util/database"
import { ObjectId } from "mongodb"
export default async function handler(res,req){
  if(res.method ==="DELETE"){
      const db =(await connectDB).db('forum')
      let result =await db.collection('post').deleteOne({_id: new ObjectId(res.body)})
      req.status(200).json('삭제완료')
  }
}