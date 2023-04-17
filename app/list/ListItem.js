'use client'
import DetailLink from "./DetailLink.js"
import Link from "next/link"
export default function ListItem ({result}){
  return(
    <>
      {
          result.map((a,i)=>
              <>
                <div className="list-item" key={i}>
                    <Link href={'/detail/'+result[i]._id.toString()}>
                        <h4>{result[i].title}</h4>
                    </Link>
                    <DetailLink/>
                    <Link href={'/edit/'+result[i]._id.toString()}>👀</Link>
                    <p>{result[i].content}</p>
                    <span onClick={(e)=>{
/*                     fetch('/api/post/delete',{method:'DELETE',body :result[i]._id})
                      .then((r)=>{
                        return r.json()
                      }).then((r)=>{
                        setTimeout(()=>{
                          e.target.parentElement.style.opacity =0;
                          e.target.parentElement.style.display='none';
                        },1000)
                      })  */
                      fetch('/api/abc/kim')
                    }}>🗑</span>
                </div>
            </>
          )}
    </>

  )
}