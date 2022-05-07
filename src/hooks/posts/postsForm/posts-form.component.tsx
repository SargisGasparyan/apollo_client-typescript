import React from 'react'
import {useForm} from 'react-hook-form'
import {useCreatePosts} from "../postsForm/useCreatePosts"

interface FormData{
    title:string;
    body: string;
}
const PostsForm:React.FC = () => {
    const {register,handleSubmit} = useForm<FormData>()
    const createPost = useCreatePosts()
    const onSubmit=handleSubmit(({title,body})=>{
       createPost({
           variables: {
               input: {
                   title,
                   body
               }
           }
       })
    })



  return (
    <div className='posts-form'>
        <form action="" onSubmit={onSubmit}>
            <input type="text" name="title" ref={register}/>
            <input name="body" ref={register} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default PostsForm