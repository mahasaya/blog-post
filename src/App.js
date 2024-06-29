import Header from "./Component/Header";
import Blogs from "./Component/Blogs";
import React, { useContext, useEffect } from "react";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import "./App.css";
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation()
  const { fetchBlogsPosts } = useContext(AppContext);
  useEffect(() => {
    const page = searchParams.get("page")??1;
    
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogsPosts(Number(page),tag)
    }

    else if (location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogsPosts(Number(page),null,category)
    }
    else{
      fetchBlogsPosts(Number(page));
    }
    
  }, [location.pathname,location.search]);
  return (
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/blog/:blogId" element={ <Header />}/>
      <Route path="/tags/:tag" element={ <Blogs />}/>
      <Route path="/categories/:category" element={<CategoryPage />}/>
    </Routes>
  );
};

export default App;
