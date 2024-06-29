import React, { useContext, useEffect, useState } from 'react'
import { useLocation,useNavigate,useNavigation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Header from '../Component/Header';
import BlogDetails from "../Component/BlogDetails"
import { baseUrl } from '../baseUrl';


const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
  const [blog, setBlog]=useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation()
  const navigation = useNavigate();
  const {setLoading,loading} = useContext(AppContext)

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url =  `${newBaseUrl}get-blog?blogId=${blogId}`
    try{
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log("Error aagya bhai blog id wali call mai");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname])
  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>navigation(-1)}>
          back
        </button>
      </div>
      {
        loading ? <p>loading</p>:(blog? <div>
          <BlogDetails post = {blog}/>
          <h2>
            Related Blogs
          </h2>
          {
            relatedBlogs.map((post)=>{
              <div>
                <BlogDetails post = {post}/>
              </div>
            })
          }
        </div> :<p> NO BLOG FOUND</p>)
      }
    </div>
  )
}

export default BlogPage