import {connectDB} from "@/util/database.js"
import Link from "next/link"
import DetailLink from "./DetailLink.js"
import ListItem from "./ListItem.js"
export const dynamic = 'force-dynamic'//매번 다른 HTML노출시킨다'
//export const revalidate =20
export default async function List(){
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result[0].title)
  return (
    
    <div className="list-bg">
      <ListItem result={result}/>
    </div>
  )
}