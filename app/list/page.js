

import {connectDB} from "@/util/database.js"
import Link from "next/link"
import DetailLink from "./DetailLink.js"
export default async function List(){
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result[0].title)
  return (
    
    <div className="list-bg">
      {
        result.map((a,i)=>
            <>
              <div className="list-item">
                  <Link href={'/detail/'+result[i]._id.toString()}>
                      <h4>{result[i].title}</h4>
                  </Link>
                  <DetailLink/>
                  <Link href={'/edit/'+result[i]._id.toString()}>👀</Link>
                  <p>{result[i].content}</p>
              </div>
          </>
        )}
    </div>
  )
}