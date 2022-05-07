import React from 'react'
import PostGrid from "../../components/postGrid/postGrid"
import { Post } from '../../common/interfaces/post.interface'
import {useGetPosts} from "../../hooks/posts/postsForm/useGetPosts"

const Home:React.FC = () => {
//     const posts:Post[]=[
//         {
// id:'1',
// title:'title',
// body:'body'
//     }
// ]
const posts = useGetPosts()
  return (
    <div>
        <PostGrid posts={posts}/>
    </div>
  )
}

export default Home