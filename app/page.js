import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {connectDB} from "@/util/database.js"
import { MongoClient } from 'mongodb'
 

export default async function Home() {
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result)

  db.collection('post').find()
  return (
   <>
    <div>안녕</div>
   </>
  )
}
