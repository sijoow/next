import {connectDB} from "@/util/database.js"
import {ObjectId} from 'mongodb'
export default async function Edit(props){
  //DB에서 게시물 가져오기 코드
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
    console.log(result)

  /*
  await db.collection('post').updateOne({_id : new ObjectId(props.params.id)},
    {$set:{title:'바보',content:'바보2'}}
  )
*/

  return(
    <>
    <div className="p-20">
        <h4>수정페이지</h4>
        <form action="/api/post/edit" method="POST">
          <input name="title" defaultValue={result.title}/>
          <input name="content"value={result.content}/>
          <input style={{display:'none'}}name="_id"value={result._id.toString()}/>
          <button type="submit">전송</button>
        </form>
      </div>
    </>
  )
}