import React, { createContext, useState } from 'react'
import {baseUrl} from '../baseUrl'

export const AppContext =  createContext();

export default function AppContextProvider({children}){
    const [loading, setLoding] =  useState(true)
    const [posts,setPost] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages]= useState(null)
     
    async function fetchBlogsPosts(page=1){
        setLoding(true)
        let url = `${baseUrl}?page=${page}`
        try{
            const result = await fetch(url);
            const data = await result.json()
            console.log(data)
            setPage(data.page)  
            setPost(data.posts)
            setTotalPages(data.totalPages)
        }

        catch(error){
            console.log("Error in Fetching")
            setPage(1);
            setPost([]);
            setTotalPages(null)
        }
        setLoding(false);
    }

    function handlePageChange(page){
        setPage(page)
        fetchBlogsPosts(page)
    }
    const value ={
        posts,
        setPost,
        loading,
        setLoding,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogsPosts,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}