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
            <div key={post.id}>
              <p  className=' font-bold text-lg '>{post.title}</p>
              <p className='text-sm'>
                By <span className=' italic'>{post.author}</span> on <span className=' underline font-bold'>{post.category}</span>
              </p>
              <p  className='text-sm mt-[4px]'>
                posted on {post.data}
              </p>
              <p className='text-md mt-[14px] '>
                {post.content}
              </p>
              <div className='flex gap-x-3'>
                {post.tags.map((tag,index)=>{
                  return  <span  key={index} className=' text-blue-500 underLine font-bold text-xs mt-[5px]'>
                    {`#${tag}`}
                  </span>
                })}
              </div>
            </div>
          )))
        )
      }
    </div>
  )
}

export default Blogs