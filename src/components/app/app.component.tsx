import React from 'react'
import Header from "../header/header.component"
import { Routes,Route } from 'react-router-dom'
import Home from "../../pages/home/home.page"
import { ApolloProvider } from '@apollo/client'
import About from "../../pages/about/about.page"
import client from "../../common/apollo-client"

const App:React.FC = () => {
  return (
    <div>
        <ApolloProvider client={client}>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about/*' element={<About/>}>
            <Route path="profile" element={<h1>profile</h1>} />
            <Route path="account" element={<h1>account</h1>} />
        </Route>
            
        </Routes>
        </ApolloProvider>
    </div>
  )
}

export default App