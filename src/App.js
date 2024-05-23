import Header from './Component/Header'
import Blogs from './Component/Blogs'
import Pagination from './Component/Pagination'
import React, { useContext ,useEffect} from 'react'
import { AppContext } from './Context/AppContext'
import  './App.css'

const App = () => {
  const{fetchBlogsPosts}=useContext(AppContext)
  useEffect(()=>{
    fetchBlogsPosts()
  },[]);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>

  )
}

export default App