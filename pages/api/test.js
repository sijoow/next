export default function handler(res,req){
  console.log(123)
  //res//어떤 URL 어떤 metod
  //req >응답
  if(res.method =="POST"){
    return req.status(200).json('처리완료')
  }else{
    return req.status(400).json('실패')
  }
  
}
