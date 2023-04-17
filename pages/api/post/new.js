import {connectDB} from "@/util/database.js"

export default async function handler(res,req){
  if(res.method ==='POST'){
      if(res.body.title ===''){
        return req.status(500).json('글자를 입력해주세요')
      }
      try {
        const db = (await connectDB).db('forum')
        let result = await db.collection('post').insertOne(res.body)
        return req.status(200).redirect('/list')
      } catch(error){
      }

  }
}