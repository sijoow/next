import {connectDB} from "@/util/database.js"
import {getServerSession} from 'next-auth'
import { authOptions } from "../auth/[...nextauth]"
export default async function handler(req,res){
  let session=await getServerSession(req,res,authOptions)
  console.log(session.user.email)
  if(session){
    req.body.author = session.user.email
  }
  if(res.method ==='POST'){
      if(res.body.title ===''){
        return req.status(500).json('글자를 입력해주세요')
      }
      try {
        const db = (await connectDB).db('forum')
        let result = await db.collection('post').insertOne(req.body)
        return res.status(200).redirect('/list')
      } catch(error){
      }

  }
}