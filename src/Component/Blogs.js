import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useEffect } from 'react'
import Spinner from './Spinner'
const Blogs = () => {
  //consume

  const {posts,loading} = useContext(AppContext)
  return (
    <div className='w-11/12 max-w-[450px] flex flex-col gap-y-7 mt-16'>
      {
        loading  ? (<Spinner/>):(
          posts.length===0 ? (
            <div>
              <p>no posts Found</p>
            </div>
          ) :
          (posts.map((post)=>(
            <BlogDetails key = {post.id} post={post}/>
          )))
        )
      }
    </div>
  )
}

export default Blogs