export default function handler(res,req){
  console.log(res.query)
  return req.status(200).json('하나')  
}
