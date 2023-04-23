export default function Write(){

  /*
  if(유저섹션 출력해서 아무것도 없으면){
    return로그인하세요를 보여줘
  }
  아니면 아래꺼 보여줘
  */
  return(
    <>
    <div className="p-20">
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글제목"/>
          <input name="content"placeholder="글내용"/>
          <button type="submit">버튼</button>
        </form>
      </div>
    </>
  )
}