import React from 'react'
import Header from '../Component/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../Component/Pagination';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation()
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>

        <div>
            <button
                onClick={()=> navigation(-1)}
            >
<h2>
    Blogs on <span>{category}</span>
</h2>
            </button>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage