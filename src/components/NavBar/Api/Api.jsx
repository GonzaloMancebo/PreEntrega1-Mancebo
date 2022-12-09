import { useEffect, useState } from "react";
import React from "react";
import {NavBar} from "../../../components/NavBar/Navbar";


export const Container = () =>{
    const [content, setContent] = useState()

    useEffect(() => {

    const URLComentarios = 'https://jsonplaceholder.typicode.com/posts/1/comments'
    fetch (URLComentarios)
    .then((res)=> res.json())
    .then((data)=> setContent(data.data))
    .catch((err)=> console.log(err))
},[]);


    return content.length ? <Navbar items {content}/> : <h2>Loading Data.... </h2>
    
}