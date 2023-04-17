import {connectDB} from "@/util/database.js"
import {ObjectId} from 'mongodb'
export default async function Detail(props){
  const db = (await connectDB).db('forum')
  let result = await db.collection('post')
  .findOne({_id : new ObjectId(props.params.id)})
  return(
    <div>
      <h4>상세페이지</h4>
      <h5>{result.title}</h5>
      <p>{result.content}</p>
    </div>
    
  )
}