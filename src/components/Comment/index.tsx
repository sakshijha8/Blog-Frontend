import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CommentWrapper,Button,Heading1,Heading2, BoxComment} from 'styles/components/Comment'

const Comment = ({getCommData}:any) => {
  const routeParams = useParams<string>();
    const [input,setInput]=useState("")
    const [comment,setComment]=useState("")
    const handleInput=async()=>{
       let res =await axios.post('https://blog-mern-app-delta.vercel.app/posts/comment',{
        comment:input,
        postId:routeParams.id
       })
       getCommData()
       console.log(res)
    }
  return (
    <>
    <CommentWrapper>
     <Heading1>Leave a Comment</Heading1>
     <Heading2>Comment</Heading2>
     <BoxComment onChange={(e:any)=>{setInput(e.target.value)}}/>
     <Button onClick={handleInput}>Submit</Button>
     <>{comment}</>
    </CommentWrapper>
    </>
  )
}
export default Comment;