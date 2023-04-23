import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {connectDB} from "@/util/database.js"
import { MongoClient } from 'mongodb'
//유저가 60초마다 페이지 캐싱됨  페이지단위 케싱 사용하는 변수 
export const revalidate =60;
export default async function Home() {


  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result)


  //캐싱 기능  await fetch('URL)
  db.collection('post').find()
  return (
   <>
    <div>안녕</div>
   </>
  )
}
