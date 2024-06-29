import React from 'react'
import Header from '../Component/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../Component/Pagination';
const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation()
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div>
            <button onClick={()=>NavigationPreloadManager(-1)}>
                back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>

    </div>
  )
}

export default TagPage