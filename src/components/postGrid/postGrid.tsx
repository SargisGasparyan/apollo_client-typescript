import React from 'react'
import { Post } from '../../common/interfaces/post.interface'
import PostGridItem from "./postGridItem/postGridItem"
interface PostsGridProps{
    posts?:Post[]
}

const PostGrid:React.FC<PostsGridProps> = ({posts}:PostsGridProps) => {
  return (
    <div>
        {posts?.map((item,index)=>{
            return(
                    <div key={index}><PostGridItem post={item}/></div>
                )
        })}
    </div>
  )
}
export default PostGrid

