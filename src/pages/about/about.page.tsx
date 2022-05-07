import React from 'react'
import { Route,Routes,Outlet } from 'react-router-dom'
import PostsForm from "../../../src/hooks/posts/postsForm/posts-form.component" 

const About:React.FC = () => {
  return (
    <div>
        About page
        <PostsForm/>
      <Outlet/>
    </div>
  )
}

export default About